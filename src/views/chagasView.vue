<template class="steps-container">
    <el-row style="align-content: start;">
        <h4>SEGUIMIENTO CLÍNICO DE LA GESTANTE CON ENFERMEDAD DE CHAGAS</h4>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="mb">
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">

                <el-tab-pane label="Diagnostico" name="second" ref="elTab2">

                    <section style="width: 100%;">
                        <el-row :gutter="10" style="width: 100%;">
                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                <h5>CONDICIÓN EN EL MOMENTO DEL DIAGNÓSTICO DE ENFERMEDAD DE CHAGAS</h5>
                            </el-col>
                            <el-form :model="ruleFormDiagnosticoGestante" :rules="rulesFormDiagnosticoGestante"
                                style="width: 100%;" label-position="top" :size="formSize" status-icon ref="secondForm">
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="12">
                                    <el-form-item label="Condición en el momento del diagnostico"
                                        prop="condicionDiagnoticoChagas" class="select-width">
                                        <el-select v-model="ruleFormDiagnosticoGestante.condicionDiagnoticoChagas"
                                            placeholder="Condición en el momento del diagnostico">
                                            <el-option label="Diagnostico antes de la gestación actual" value="1" />
                                            <el-option label="Embarazo" value="2" />
                                            <el-option label="Parto" value="2" />
                                            <el-option label="Puerperio" value="2" />
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="12">
                                    <el-form-item label="Si el diagnostico se realiza durante la gestación indique la edad gestacional en
                                        semanas:" prop="edadGestacionalSemanas">
                                        <el-input v-model="ruleFormDiagnosticoGestante.edadGestacionalSemanas"
                                            placeholder="Semanas" type="number" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Edad gestacional en semanas del primer control prenatal:"
                                        prop="edadGestacionalPrimerControlPrentalSemanas">
                                        <el-input
                                            v-model="ruleFormDiagnosticoGestante.edadGestacionalPrimerControlPrentalSemanas"
                                            placeholder="Semanas" type="number" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="column-custom">
                                    <el-form-item label="Fecha probable del parto:" prop="fechaProbableParto">
                                        <el-date-picker type="date" placeholder="Fecha probable del parto"
                                            v-model="ruleFormDiagnosticoGestante.fechaProbableParto" :format="dateFormat"
                                        />
                                    </el-form-item>
                                </el-col>
                            </el-form>

                            <el-col :span="24">
                                <h4>ALGORITMO UTILIZADO PARA CONFIRMAR EL DIAGNOSTICO DE ENFERDAD DE CHAGAS:</h4>
                            </el-col>
                            <el-form :model="ruleFormAlgoritmoChagas" :rules="rulesFormAlgoritmoChagas" style="width: 100%;"
                                label-position="top" :size="formSize" status-icon ref="secondForm">
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="column-custom mb">

                                    <el-form-item label="Sospecha de enfermedad
                                        de chagas agudo:" prop="sospechaChagasAgudo">
                                        <el-radio-group v-model="ruleFormAlgoritmoChagas.sospechaChagasAgudo">
                                            <el-radio :label="0">Aplica</el-radio>
                                            <el-radio :label="1">No Aplica</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <div class="demo-collapse">
                                        <el-collapse>
                                            <el-collapse-item title="EXAMEN PARASITOLÓGICO" name="1">
                                                <div>
                                                    <el-row :gutter="20">
                                                        <el-radio-group
                                                            v-model="ruleFormAlgoritmoChagas.examenParasitologico">
                                                            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                                class="align-end">
                                                                <el-form-item label="Gota gruesa a partir de sangre fresca">
                                                                    <el-radio :label="1"></el-radio>
                                                                </el-form-item> 
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                                <el-form-item label="RESULTADO">
                                                                    <el-input v-model="ruleFormAlgoritmoChagas.resultadoExamenParasitologico" type="number"  />
                                                                </el-form-item>
                                                            </el-col> 
                                                            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                                class="align-end">
                                                                <el-form-item label="Frotis o extendido a partir de sangre">
                                                                    <el-radio :label="2"></el-radio>
                                                                </el-form-item> 
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                                <el-form-item label="RESULTADO">
                                                                    <el-input v-model="ruleFormAlgoritmoChagas.resultadoExamenParasitologico" type="number"  />
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                                class="align-end">
                                                                <el-form-item label="Microhematocrito">
                                                                    <el-radio :label="3"></el-radio>
                                                                </el-form-item>  
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                                <el-form-item label="RESULTADO">
                                                                    <el-input v-model="ruleFormAlgoritmoChagas.resultadoExamenParasitologico" type="number"  />
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                                class="align-end"> 
                                                                <el-form-item label="Método de strout">
                                                                    <el-radio :label="4"></el-radio>
                                                                </el-form-item>  
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                                <el-form-item label="RESULTADO">
                                                                    <el-input v-model="ruleFormAlgoritmoChagas.resultadoExamenParasitologico" type="number"  />
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                                class="align-end"> 
                                                                <el-form-item label="Micrométodo">
                                                                    <el-radio :label="4"></el-radio>
                                                                </el-form-item> 
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                                <el-form-item label="RESULTADO">
                                                                    <el-input v-model="ruleFormAlgoritmoChagas.resultadoExamenParasitologico" type="number"  />
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                                class="column-custom" style="align-items:center">
                                                                <el-form-item label="Fecha
                                                                de recolección de muestra">
                                                                    <el-date-picker style="margin-bottom:8px" type="date"
                                                                        placeholder="Fecha de recolección de muestra"
                                                                        :format="dateFormat"/>
                                                                </el-form-item>
                                                            </el-col>
                                                        </el-radio-group>
                                                    </el-row>

                                                </div>
                                            </el-collapse-item>
                                        </el-collapse>
                                    </div>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="column-custom mb mt">
                                    <el-form-item label="Sospecha de enfermedad
                                        de chagas cronico o tamizaje del control prenatal:" prop="nombreAseguradora">
                                        <el-radio-group>
                                            <el-radio :label="0">Aplica</el-radio>
                                            <el-radio :label="1">No Aplica</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <div class="demo-collapse">
                                        <el-collapse>
                                            <el-collapse-item
                                                title="Serología para detección de anticuerpos totales contra Tripanozoma Cruzi por dos tecnicas de ELISA"
                                                name="2">
                                                <div>
                                                    <el-row :gutter="20">
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="align-end">
                                                            <h5>Prueba de tamizaje ELISA con Antigenos totales</h5>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number"  />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de recolección de muestra</label>
                                                            <el-date-picker style="margin-bottom:8px" type="date"
                                                                placeholder="Fecha de recolección de muestra"
                                                                :format="dateFormat"/>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de emisión del resultado</label>
                                                            <el-date-picker style="margin-bottom:8px" type="date"
                                                                placeholder="Fecha de emisión" :format="dateFormat"
                                                            />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="align-end">
                                                            <h5>Prueba confirmatoria ELISA con Antigenos recombinantes</h5>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number"  />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de recolección de muestra</label>
                                                            <el-date-picker style="margin-bottom:8px" type="date"
                                                                placeholder="Fecha de recolección de muestra"
                                                                :format="dateFormat"/>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de emisión del resultado</label>
                                                            <el-date-picker style="margin-bottom:8px" type="date"
                                                                placeholder="Fecha de emisión" :format="dateFormat"
                                                            />
                                                        </el-col>
                                                    </el-row>

                                                </div>
                                            </el-collapse-item>
                                            <el-collapse-item title="Pruebas no concordantes" name="3">
                                                <div>
                                                    <el-row :gutter="20">
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="Tipo de prueba utilizada">
                                                                <el-input />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number"  />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de recolección de muestra</label>
                                                            <el-date-picker style="margin-bottom:8px" type="date"
                                                                placeholder="Fecha de recolección de muestra"
                                                                :format="dateFormat"/>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de emisión del resultado</label>
                                                            <el-date-picker style="margin-bottom:8px" type="date"
                                                                placeholder="Fecha de emisión" :format="dateFormat"
                                                            />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="align-end mt">
                                                            <h5>Prueba confirmatoria ELISA con Antigenos recombinantes</h5>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt">
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number"  />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de recolección de muestra</label>
                                                            <el-date-picker style="margin-bottom:8px" type="date"
                                                                placeholder="Fecha de recolección de muestra"
                                                                :format="dateFormat"/>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de emisión del resultado</label>
                                                            <el-date-picker style="margin-bottom:8px" type="date"
                                                                placeholder="Fecha de emisión" :format="dateFormat"
                                                            />
                                                        </el-col>
                                                    </el-row>

                                                </div>
                                            </el-collapse-item>
                                        </el-collapse>
                                    </div>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="12" class="column-custom mb mt">
                                    <el-form-item label="Caso confirmado de
                                        gestante con enferdad de chagas:" prop="nombreAseguradora">
                                        <el-radio-group>
                                            <el-radio :label="1">Si</el-radio>
                                            <el-radio :label="0">No</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="12" class="column-custom mb mt">
                                    <el-form-item label="Caso de gestante
                                        descartado con enferdad de chagas:" prop="nombreAseguradora">
                                        <el-radio-group>
                                            <el-radio :label="1">Si</el-radio>
                                            <el-radio :label="0">No</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="column-custom mb mt">
                                    <el-form-item label="Número de hijos
                                        diferentes al fruto del embarazo en curso a los que se les debe realizar pruebas de
                                        diagnostico de Chagas:" prop="nombreAseguradora">
                                        <el-form-item label="Nro de Hijos" prop="nombreAseguradora">
                                            <el-input type="number" />
                                        </el-form-item>
                                    </el-form-item>
                                </el-col>
                            </el-form>
                        </el-row>
                    </section>
                </el-tab-pane>
                <el-tab-pane label="Tratamiento materno" name="third" ref="elTab3">
                    <el-form style="width: 100%;" label-top="top" :size="formSize" status-icon ref="secondForm">
                        <section style="width: 100%;">
                            <el-row :gutter="10" style="width: 100%;">
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Medicamento suministrado" prop="tipoDocumento"
                                        class="select-width">
                                        <el-select placeholder="Medicamento suministrado">
                                            <el-option label="Benznidazol" value="1" />
                                            <el-option label="Nufurtimox" value="2" />
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="column-custom"
                                    style="align-items:end">
                                    <label class="title-field"
                                        style="min-width: 180px !important;width:inherit !important">Fecha
                                        de inicio del tratamiento</label>
                                    <el-date-picker style="margin-bottom:8px" type="date" placeholder="Fecha de emisión"
                                        :format="dateFormat"/>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="column-custom mt mb">
                                    <label class="title-field"
                                        style="min-width: 180px !important;width:inherit !important">Controles
                                        médicos</label>
                                    <el-select v-model="value1" multiple placeholder="Select" style="width: 100%">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value" />
                                    </el-select>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="column-custom mt mb">
                                    <label class="title-field" style="min-width: 180px !important;width:180px">Finalización
                                        de lactancia materna</label><br />
                                    <el-radio-group>
                                        <el-radio :label="1">Si</el-radio>
                                        <el-radio :label="0">No</el-radio>
                                    </el-radio-group>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                    <el-form-item label="Metodo anticonceptivo utilizado durante el embarazo">
                                        <el-input />
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </section>
                    </el-form>

                </el-tab-pane>
            </el-tabs>
        </el-col>
        <el-divider class="mt"></el-divider>
        <h4>SEGUIMIENTO DEL NIÑO O NIÑA EXPUESTO - RIESGO DE TMI DE ENFERMEDAD DE CHAGAS</h4>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-tabs v-model="activeNameKids" class="demo-tabs" @tab-click="handleClick">
                <el-tab-pane label="Datos demograficos" name="firstKid" ref="elTabKid1">
                    <el-form style="width: 100%;" label-top="top" :size="formSize" status-icon ref="firstForm">
                        <section style="width: 100%;">
                            <el-row :gutter="10" style="width: 100%;">
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="column-custom">
                                    <el-form-item label="Fecha de
                                        nacimiento" prop="edad">
                                        <el-date-picker type="date" placeholder="Fecha de nacimiento" :format="dateFormat"
                                        />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="column-custom mb">
                                    <el-form-item label="Condición del recien nacido" prop="edad">
                                        <el-radio-group>
                                            <el-radio :label="1">Vivo</el-radio>
                                            <el-radio :label="2">Mortinato</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="column-custom mb">
                                    <el-form-item label="Número de productos al nacimiento" prop="edad">
                                        <el-radio-group>
                                            <el-radio :label="1">único</el-radio>
                                            <el-radio :label="2">Multiple</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Edad gestacional al nacimiento, en semanas" prop="edad">
                                        <el-input type="number" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Peso en gramos" prop="edad">
                                        <el-input type="number" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="column-custom mb">
                                    <el-form-item label="Sexo" prop="edad">
                                        <el-radio-group>
                                            <el-radio :label="1">Hombre</el-radio>
                                            <el-radio :label="2">Mujer</el-radio>
                                            <el-radio :label="3">Intersexual</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="column-custom mb">
                                    <el-form-item label="Tipo de parto" prop="edad">
                                        <el-radio-group>
                                            <el-radio :label="1">Cesarea</el-radio>
                                            <el-radio :label="2">Vaginal</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Tipo de regimen de salud" prop="tipoRegimenSalud"
                                        class="select-width">
                                        <el-select placeholder="Tipo de regimen de salud">
                                            <el-option label="Excepción" value="1" />
                                            <el-option label="Contributivo" value="2" />
                                            <el-option label="Subsidiado" value="3" />
                                            <el-option label="Especial" value="4" />
                                            <el-option label="No asegurado" value="5" />
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Nombre aseguradora (EAPB)" prop="nombreAseguradora">
                                        <el-input />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Nombres y Apellidos" prop="nombresApellidos">
                                        <el-input />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Tipo de Documento" prop="tipoDocumento" class="select-width">
                                        <el-select placeholder="Tipo de Documento">
                                            <el-option label="RC" value="1" />
                                            <el-option label="CNV" value="2" />
                                            <el-option label="MS" value="3" />

                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Número de identificación" prop="documentNumber">
                                        <el-input type="number" />
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </section>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="Diagnostico" name="secondKid" ref="elTabKid2">
                    <el-form style="width: 100%;" label-position="top" :size="formSize" status-icon ref="firstForm">
                        <section style="width: 100%;">
                            <el-row :gutter="10" style="width: 100%;">
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <div class="demo-collapse">
                                        <el-collapse v-model="activeCollapseKids1">
                                            <el-collapse-item title="Prueba de diagnostico al nacer" name="1">
                                                <div>
                                                    <el-row :gutter="20">
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                                            <h4 class="align-start">EXAMEN PARASITOLÓGICO</h4>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="align-end">
                                                            <el-checkbox label="Gota gruesa a partir de sangre fresca"
                                                                size="large" border />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number"  />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="align-end">
                                                            <el-checkbox label="Frotis o extendido a partir de sangre"
                                                                size="large" border />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number"  />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="align-end">
                                                            <el-checkbox label="Microhematocrito" size="large" border />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number"  />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="align-end">
                                                            <el-checkbox label="Método de strout" size="large" border />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number"  />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="align-end">
                                                            <el-checkbox label="Micrométodo" size="large" border />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number"  />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de recolección de muestra</label>
                                                            <el-date-picker style="margin-bottom:8px" type="date"
                                                                placeholder="Fecha de recolección de muestra"
                                                                :format="dateFormat"/>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de emisión del resultado</label>
                                                            <el-date-picker style="margin-bottom:8px" type="date"
                                                                placeholder="Fecha de emisión del resultado"
                                                                :format="dateFormat"/>
                                                        </el-col>
                                                    </el-row>

                                                </div>
                                            </el-collapse-item>
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"
                                                class="column-custom mb mt">
                                                <el-form-item label="Prueba de
                                                    diagnostico a los 3 meses de nacido, en caso de que la prueba de
                                                    diagnóstico al nacer sea NEGATIVA">
                                                    <el-radio-group>
                                                        <el-radio :label="0">Aplica</el-radio>
                                                        <el-radio :label="1">No Aplica</el-radio>
                                                    </el-radio-group>
                                                </el-form-item>
                                            </el-col>
                                            <el-collapse-item title="Prueba de diagnostico al nacer" name="2">
                                                <div>
                                                    <el-row :gutter="20">
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                                            <h4 class="align-start">EXAMEN PARASITOLÓGICO</h4>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="align-end">
                                                            <el-checkbox label="Gota gruesa a partir de sangre fresca"
                                                                size="large" border />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number"  />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="align-end">
                                                            <el-checkbox label="Frotis o extendido a partir de sangre"
                                                                size="large" border />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number"  />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="align-end">
                                                            <el-checkbox label="Microhematocrito" size="large" border />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number"  />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="align-end">
                                                            <el-checkbox label="Método de strout" size="large" border />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number"  />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="align-end">
                                                            <el-checkbox label="Micrométodo" size="large" border />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number"  />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de recolección de muestra</label>
                                                            <el-date-picker style="margin-bottom:8px" type="date"
                                                                placeholder="Fecha de recolección de muestra"
                                                                :format="dateFormat"/>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de emisión del resultado</label>
                                                            <el-date-picker style="margin-bottom:8px" type="date"
                                                                placeholder="Fecha de emisión del resultado"
                                                                :format="dateFormat"/>
                                                        </el-col>
                                                    </el-row>
                                                </div>
                                            </el-collapse-item>
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"
                                                class="column-custom mb mt">
                                                <el-form-item label="Prueba de
                                                    diagnostico molecular por criterio clínico o
                                                    epidemiológico">
                                                    <el-radio-group>
                                                        <el-radio :label="0">Si Aplica</el-radio>
                                                        <el-radio :label="1">No Aplica</el-radio>
                                                    </el-radio-group>
                                                </el-form-item>
                                            </el-col>
                                            <el-collapse-item title="Prueba de diagnostico al nacer" name="3">
                                                <div>
                                                    <el-row :gutter="20">
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <el-form-item label="Reacción
                                                                en cadena polimerasa (PCR)">
                                                                <el-input placeholder="RESULTADO" type="number"
                                                                     />
                                                            </el-form-item>
                                                        </el-col>

                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <el-form-item label="Fecha
                                                                de recolección de muestra">
                                                                <el-date-picker style="margin-bottom:8px" type="date"
                                                                    placeholder="Reacción
                                                                en cadena polimerasa (PCR)" :format="dateFormat"
                                                                />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <el-form-item label="Fecha
                                                                de emisión del resultado">
                                                                <el-date-picker style="margin-bottom:8px" type="date"
                                                                    placeholder="Fecha de emisión del resultado"
                                                                    :format="dateFormat"/>
                                                            </el-form-item>
                                                        </el-col>
                                                    </el-row>
                                                </div>
                                            </el-collapse-item>
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"
                                                class="column-custom mb mt">
                                                <el-form-item label="Pruebas de
                                                    diagnostico serológico a los 8 a 10 meses de nacido si las pruebas de
                                                    diagnóstico directo al momento del nacimiento y a los tre meses de naces
                                                    son negativas">
                                                    <el-radio-group>
                                                        <el-radio :label="0">Si Aplica</el-radio>
                                                        <el-radio :label="1">No Aplica</el-radio>
                                                    </el-radio-group>
                                                </el-form-item>
                                            </el-col>
                                            <el-collapse-item title="Prueba de diagnostico al nacer" name="4">
                                                <div>
                                                    <el-row :gutter="20">
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom mt mb">
                                                            <el-form-item label="Antígenos">
                                                                <el-select v-model="antigenosValue" multiple
                                                                    placeholder="Select" style="width: 100%">
                                                                    <el-option v-for="item in antigenos" :key="item.value"
                                                                        :label="item.label" :value="item.value" />
                                                                </el-select>
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="column-custom mt mb" style="align-items:end">
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number"  />
                                                            </el-form-item>
                                                        </el-col>

                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <el-form-item label="Fecha
                                                                de recolección de muestra">
                                                                <el-date-picker style="margin-bottom:8px" type="date"
                                                                    placeholder="Fecha de recolección de muestra"
                                                                    :format="dateFormat"/>
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <el-form-item label="Fecha
                                                                de emisión del resultado">
                                                                <el-date-picker style="margin-bottom:8px" type="date"
                                                                    placeholder="Fecha de emisión del resultado"
                                                                    :format="dateFormat"/>
                                                            </el-form-item>
                                                        </el-col>
                                                    </el-row>
                                                </div>
                                            </el-collapse-item>
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"
                                                class="column-custom mb mt">
                                                <el-form-item label="Caso
                                                    confirmado de TMI de la enfermedad de chagas">
                                                    <el-radio-group>
                                                        <el-radio :label="1">Si</el-radio>
                                                        <el-radio :label="0">No</el-radio>
                                                    </el-radio-group>
                                                </el-form-item>
                                            </el-col>
                                        </el-collapse>
                                    </div>
                                </el-col>
                            </el-row>
                        </section>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="Tratamiento del menor" name="thirdKid" ref="elTabKid3">
                    <el-form style="width: 100%;" label-position="top" :size="formSize" status-icon ref="secondForm">
                        <section style="width: 100%;">
                            <el-row :gutter="10" style="width: 100%;">
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <h4 class="align-start">TRATAMIENTO Y SEGUIMIENTO DEL NIÑO O NIÑA CONFIRMADO CON
                                        ENFERMEDAD DE CHAGAS CONGENITO</h4>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Medicamento suministrado" prop="tipoDocumento"
                                        class="select-width">
                                        <el-select placeholder="Medicamento suministrado">
                                            <el-option label="Benznidazol" value="1" />
                                            <el-option label="Nufurtimox" value="2" />
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="column-custom"
                                    style="align-items:end">
                                    <el-form-item label="Fecha de inicio del tratamiento" prop="tipoDocumento"
                                        class="w-100">
                                        <el-date-picker style="margin-bottom:8px" type="date" placeholder="Fecha de emisión"
                                            :format="dateFormat"/>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="column-custom mt mb">
                                    <el-form-item label="Controles médicos" prop="tipoDocumento" class="w-100">
                                        <el-select v-model="value1" multiple placeholder="Select" style="width: 100%">
                                            <el-option v-for="item in options" :key="item.value" :label="item.label"
                                                :value="item.value" />
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <div class="demo-collapse">
                                        <el-collapse v-model="activeCollapseKids1">
                                            <el-collapse-item
                                                title="Prueba de serología a los 6 meses de terminar el tratamiento"
                                                name="1">
                                                <div>
                                                    <el-row :gutter="20">
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom mt mb">
                                                            <el-form-item label="Antígenos" prop="tipoDocumento"
                                                                class="w-100">
                                                                <el-select v-model="antigenosValue" multiple
                                                                    placeholder="Select" style="width: 100%">
                                                                    <el-option v-for="item in antigenos" :key="item.value"
                                                                        :label="item.label" :value="item.value" />
                                                                </el-select>
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="column-custom mt mb" style="align-items:end">
                                                            <el-form-item label="RESULTADO" class="w-100">
                                                                <el-input type="number"  />
                                                            </el-form-item>
                                                        </el-col>

                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <el-form-item label="Fecha de recolección de muestra"
                                                                prop="tipoDocumento" class="w-100">
                                                                <el-date-picker style="margin-bottom:8px" type="date"
                                                                    placeholder="Fecha de recolección de muestra"
                                                                    :format="dateFormat"/>
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <el-form-item label="Fecha de emisión del resultado"
                                                                prop="tipoDocumento" class="w-100">
                                                                <el-date-picker style="margin-bottom:8px" type="date"
                                                                    placeholder="Fecha de emisión del resultado"
                                                                    :format="dateFormat"/>
                                                            </el-form-item>
                                                        </el-col>
                                                    </el-row>
                                                </div>
                                            </el-collapse-item>
                                            <el-collapse-item
                                                title="Prueba de serología a los 12 meses de terminar el tratamiento"
                                                name="2">
                                                <div>
                                                    <el-row :gutter="20">
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                                            <el-form-item label="Antígenos" prop="tipoDocumento"
                                                                class="w-100">
                                                                <el-select v-model="antigenosValue" multiple
                                                                    placeholder="Select" style="width: 100%">
                                                                    <el-option v-for="item in antigenos" :key="item.value"
                                                                        :label="item.label" :value="item.value" />
                                                                </el-select>
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            style="align-items:end">
                                                            <el-form-item label="RESULTADO" class="w-100">
                                                                <el-input type="number" />
                                                            </el-form-item>
                                                        </el-col>

                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <el-form-item label="Fecha
                                                                de recolección de muestra" prop="tipoDocumento"
                                                                class="w-100">
                                                                <el-date-picker style="margin-bottom:8px" type="date"
                                                                    placeholder="Fecha de recolección de muestra"
                                                                    :format="dateFormat"/>
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <el-form-item label="Fecha
                                                                de emisión del resultado" prop="tipoDocumento"
                                                                class="w-100">
                                                                <el-date-picker style="margin-bottom:8px" type="date"
                                                                    placeholder="Fecha de emisión del resultado"
                                                                    :format="dateFormat"/>
                                                            </el-form-item>
                                                        </el-col>
                                                    </el-row>
                                                </div>
                                            </el-collapse-item>
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                                <el-form-item label="Niño curado
                                                    de la enfermedad de chagas" prop="tipoDocumento" class="w-100">
                                                    <el-radio-group>
                                                        <el-radio :label="1">Si</el-radio>
                                                        <el-radio :label="0">No</el-radio>
                                                    </el-radio-group>
                                                </el-form-item>
                                            </el-col>
                                        </el-collapse>
                                    </div>
                                </el-col>
                            </el-row>
                        </section>
                    </el-form>
                </el-tab-pane>
            </el-tabs>
        </el-col>
    </el-row>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
//import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import 'element-plus/theme-chalk/display.css'
//import { ref } from 'vue' 
import { reactive, ref } from 'vue'
import type { FormRules, FormProps } from 'element-plus'
import { ElMessageBox } from 'element-plus'
import type { TabsPaneContext, ElForm } from 'element-plus'
import type { CheckboxValueType } from 'element-plus'
import { RuleFormDatosGestante, RuleFormPrimerReporte, RuleFormSegundoReporte, RuleFormTercerReporte, RuleFormCuartoReporte, RuleFormquintoReporte, RuleFormSeguimiento } from '@/interfaces/modeloVih'
import { RuleFormHbDatosGestante, DiagnosticoFormHb, TratamientoFormHb } from '@/interfaces/modeloHb'
import { IDiagnosticoEnfermedadGestanteChagas, IAlgoritmoChagas } from "@/api/ETMIPLUS_API";

type FormInstance = InstanceType<typeof ElForm>

@Options({
    components: {},
})

export default class HepatitisBView extends Vue {

    activeName = 'second'
    activeNameKids = 'firstKid'
    activeCollapseKids1 = 1
    disabledTwo = true
    disabledThree = true
    disabledFour = true
    disabledFive = true
    disabledSix = true
    disabledSeven = true
    isVisible = false
    dateFormat = 'DD/MM/YYYY'
    position = 'right'
    labelPosition = ref<FormProps['labelPosition']>('right')

    firstForm = ref<FormInstance>()
    secondForm = ref<FormInstance>()
    thirdForm = ref<FormInstance>()
    fourForm = ref<FormInstance>()
    fiveForm = ref<FormInstance>()
    sixForm = ref<FormInstance>()
    sevenForm = ref<FormInstance>()

    formSize = 'default'

    value1 = []
    options = [
        {
            value: '1',
            label: 'Dia 10',
        },
        {
            value: '2',
            label: 'Dia 30',
        },
        {
            value: '3',
            label: 'Dia 60',
        }
    ]

    antigenosValue = []
    antigenos = [
        {
            value: '1',
            label: 'Antigenos totales',
        },
        {
            value: '2',
            label: 'Antigenos recombinantes',
        }
    ]

    handleClick(tab: TabsPaneContext, event: Event) {
        console.log(tab, event)
    }

    changeTab(tabName: string) {
        this.activeName = tabName;
        //console.log(tabName, document.getElementById('tab-'+tabName))
        //document.getElementById('tab-'+tabName)?.classList.remove('is-disabled')
        //console.log(document.getElementById('tab-'+tabName))
        //const elTabComponent = this.$refs.elTab2 as HTMLElement; // Or use querySelector if necessary
        //const elTabComponent: HTMLElement = (this.$refs.elTab2 as any) as HTMLElement;
        if (tabName === 'second') {
            this.disabledTwo = false
        } else if (tabName === 'third') {
            this.disabledThree = false
        } else if (tabName === 'four') {
            this.disabledFour = false
        } else if (tabName === 'five') {
            this.disabledFive = false
        } else if (tabName === 'six') {
            this.disabledSix = false
        } else if (tabName === 'seven') {
            this.disabledSeven = false
        }

        //console.log(elTabComponent)
    }

    ruleFormDiagnosticoGestante = reactive<IDiagnosticoEnfermedadGestanteChagas>({
        condicionDiagnoticoChagas: [] as any,
        edadGestacionalSemanas: 0,
        edadGestacionalPrimerControlPrentalSemanas: 0,
        fechaProbableParto: new Date()
    })

    ruleFormAlgoritmoChagas = reactive<IAlgoritmoChagas>({
        sospechaChagasAgudo: 0,
        examenParasitologico: {} as any,
        resultadoExamenParasitologico: '',
        sospechaChagasCronicoOTamizajeControlPrenatal: 0,
        resultadoPruebaTamizajeElisaAntigenosTotales: 0,
        fechaRecoleccionMuestra: new Date(),
        fechaEmisionResultado: new Date(),
        resultadoPruebaTamizajeElisaAntigenosRecombinantes1: 0,
        fechaRecoleccionMuestraRecombinantes1: new Date(),
        fechaEmisionResultadoRecombinantes1: new Date(),
        resultadoPruebaTamizajeInmunocromatografia: 0,
        fechaRecoleccionMuestraInmunocromatografia: new Date(),
        fechaEmisionInmunocromatografia: new Date(),
        resultadoPruebaTamizajeElisaAntigenosRecombinantes2: 0,
        fechaRecoleccionMuestraRecombinantes2: new Date(),
        fechaEmisionResultadoRecombinantes2: new Date(),
        tipoPruebaUtilizada: '',
        resultadoPruebaUtilizada: '',
        fechaRecoleccionMuestraNoConcordante: new Date(),
        fechaEmisionNoConcordante: new Date(),
        resultadoPruebaTamizajeElisaAntigenosRecombinantes3: 0,
        fechaRecoleccionMuestraRecombinantes3: new Date(),
        fechaEmisionResultadoRecombinantes3: new Date(),
        esConfirmadoGestanteConChagas: 0,
        esDescartadoGestanteConChagas: 0,
        numeroHijosDiferenteAlEmbarazoParaRealizarDiagnosticoChagas: 0
    })

    ruleFormHbDatosGestante = reactive<RuleFormHbDatosGestante>({
        fechaIngreso: new Date(),
        nombresApellidos: '',
        nacionalidad: [],
        tipoDocumento: [],
        documentNumber: 0,
        edad: 0,
        tipoRegimenSalud: [],
        nombreAseguradora: '',
        pertenenciaEtnica: [],
        grupoPoblacional: [],
        areaOcurrencia: [],
        dptoResidencia: [],
        municipioResidencia: [],
        direccionResidencia: '',
        telefono: '',
        ctrlPrenatalEnEmbarazo: false,
        edadGestacionalEnPrimerCtrlenSemanas: 0,
        fechaProbableParto: new Date()
    })

    ruleFormHbDiagnosticoHb = reactive<DiagnosticoFormHb>({
        MomentoDiagnostico: [],
        EdadGestancionalEnSemanas: 0,
        FechaAntigenoSuperficieHb: new Date(),
        ResultadosAnticuerpo1: false,
        FechaResultadosAnticuerpo1: new Date(),
        ResultadosAnticuerpo2: false,
        FechaResultadosAnticuerpo2: new Date(),
        ResultadosAnticuerpo3: false,
        FechaResultadosAnticuerpo3: new Date(),
        ResultadoCargaViralMl: 0,
        fechaResultadoCargaViralMl: new Date()
    })

    ruleFormTercerReporte = reactive<RuleFormTercerReporte>({
        situacionGestante: [],
        fechaDelParto: new Date,
        tarEnInterparto: 0,
        esquemaArvEnInterparto: [],
        condicionRecienNacido: 0,
        numeroDeProductosAlNacimiento: [],
        edadGestacionalAlNacimientoEnSemana: new Date,
        pesoEnGramos: 0,
        sexo: [],
        tipoParto: [],
        suprecionDeLactancia: 0,
        medicamentoSuministrado: '',
        otroMedicamento: '',
    })

    rulesFormDiagnosticoGestante = reactive<FormRules<IDiagnosticoEnfermedadGestanteChagas>>({
        condicionDiagnoticoChagas: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        edadGestacionalSemanas: [
            {
                required: true,
                message: 'Este campo es requerido',
                trigger: 'blur',
            },
        ],
        edadGestacionalPrimerControlPrentalSemanas: [
            {
                required: true,
                message: 'Este campo es requerido',
                trigger: 'blur',
            },
        ],
        fechaProbableParto: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ]
    })

    rulesFormAlgoritmoChagas = reactive<FormRules<IAlgoritmoChagas>>({
        sospechaChagasAgudo: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        examenParasitologico: [
            {
                required: true,
                message: 'Este campo es requerido',
                trigger: 'blur',
            },
        ],
        resultadoExamenParasitologico: [
            {
                required: true,
                message: 'Este campo es requerido',
                trigger: 'blur',
            },
        ],
        sospechaChagasCronicoOTamizajeControlPrenatal: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        resultadoPruebaTamizajeElisaAntigenosTotales: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        fechaRecoleccionMuestra: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        fechaEmisionResultado: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        resultadoPruebaTamizajeElisaAntigenosRecombinantes1: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        fechaRecoleccionMuestraRecombinantes1: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        fechaEmisionResultadoRecombinantes1: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        resultadoPruebaTamizajeInmunocromatografia: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        fechaRecoleccionMuestraInmunocromatografia: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        fechaEmisionInmunocromatografia: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        resultadoPruebaTamizajeElisaAntigenosRecombinantes2: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        fechaRecoleccionMuestraRecombinantes2: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        fechaEmisionResultadoRecombinantes2: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        tipoPruebaUtilizada: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        resultadoPruebaUtilizada: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        fechaRecoleccionMuestraNoConcordante: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        fechaEmisionNoConcordante: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        resultadoPruebaTamizajeElisaAntigenosRecombinantes3: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        fechaRecoleccionMuestraRecombinantes3: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        fechaEmisionResultadoRecombinantes3: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        esConfirmadoGestanteConChagas: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        esDescartadoGestanteConChagas: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        numeroHijosDiferenteAlEmbarazoParaRealizarDiagnosticoChagas: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ]
    })

    submitForm = async (formEl: FormInstance | undefined, tab: string) => {
        if (!formEl) return
        await formEl.validate((valid, fields) => {
            if (valid) {
                console.log('enviando!')
                if (tab !== 'end') {
                    this.changeTab(tab)
                } else {
                    //console.log('valor a guardar', this.ruleFormDatosGestante)
                }
            } else {
                ElMessageBox.alert(`Por favor complete los campos marcados con *.`, { type: "warning" });
                console.log('error al enviar!', fields)
            }
        })
    }

    resetForm = (formEl: FormInstance | undefined) => {
        if (!formEl) return
        formEl.resetFields()
    }
}
</script>

<style>
h4,
h5 {
    text-align: left;
}

.no-margin {
    margin: 0 0 0 0
}

.steps-container {
    width: 100%;
}

.select-width .el-form-item__content,
.select-width .el-select,
.select-width .select-trigger {
    display: flex;
    flex: 1;
}

.demo-ruleForm .el-form-item--default .el-form-item__label {
    line-height: 16px;
    display: flex;
    align-items: center;
    text-align: end;
}

.btn-save {
    margin: 20px 0 0
}

.no-margin {
    margin: 0 0 0 0
}

.text-lg-end {
    text-align: right
}

.mt {
    margin-top: 2rem
}

.mb {
    margin-bottom: 2rem
}

.dark-fill {
    background-color: #E5EAF3
}

.me-2 {
    margin-right: 2rem
}


.label-field {
    line-height: 16px;
    display: inline !important;
    align-items: center;
    text-align: end;
    width: 180px;
    font-size: .9rem;
    padding-right: 3px;
    margin-bottom: 18px
}

.column-custom {
    display: flex !important;
    align-items: center
}

.column-custom label.title-field {
    margin-right: 8px;
    text-align: right;
    width: 180px;
}

@media(max-width:991px) {
    .column-custom {
        flex-flow: column;
        align-items: start
    }

    .label-field {
        text-align: left;
        width: 100%
    }

    .el-form-item__label {
        text-align: left !important;
        width: 100% !important;
        align-items: start !important;
        display: inline !important;
    }

    .el-col {
        margin-bottom: 8px
    }

    .column-custom label.title-field {
        margin-right: 0px;
        text-align: left;
        width: 100% !important;
    }

    .el-form-item {
        flex-flow: column;
        width: 100%;
    }

    .el-form-item label {
        width: 100% !important;
        text-align: left !important;
    }
}

.el-date-editor {
    width: 100% !important;
    margin-bottom: 18px
}

.el-checkbox.is-bordered.el-checkbox--large {
    flex-flow: row-reverse
}

.el-checkbox.is-bordered.el-checkbox--large .el-checkbox__input {
    margin-left: 10px;
}

@media(max-width:991px) {
    .align-end label {
        width: 100%;
        justify-content: space-between;
    }
}

@media(min-width:992px) {
    .align-end {
        display: flex !important;
        justify-content: end !important;
        align-items: center;
        margin-bottom: -13px;
    }
}

.el-checkbox.el-checkbox--large {
    height: 33px;
}

.w-100 {
    width: 100%;
}
</style>