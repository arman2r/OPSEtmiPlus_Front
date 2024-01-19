<template class="steps-container">
    <el-row style="align-content: start;">
        <h4>SEGUIMIENTO CLÍNICO DE LA GESTANTE CON ENFERMEDAD DE CHAGAS</h4>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="mb">
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                <el-tab-pane label="Datos demograficos" name="first" ref="elTab1">
                    <el-form style="width: 100%;" label-width="180px" class="demo-ruleForm" :size="formSize" status-icon
                        ref="firstForm" :label-position="labelPosition">
                        <section style="width: 100%;">
                            <el-row :gutter="10" style="width: 100%;">
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="column-custom">
                                    <label class="label-field title-field" style="width:200px;margin-right: 10px;">Fecha de
                                        reporte de la información </label>
                                    <el-date-picker type="date" placeholder="Fecha de reporte de la información"
                                        :format="dateFormat" :size="size" />
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Nombres y Apellidos" prop="nombresApellidos">
                                        <el-input v-model="ruleFormDatosGestante.nombresApellidos" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Nacionalidad" prop="nacionalidad" class="select-width">
                                        <el-select v-model="ruleFormDatosGestante.nacionalidad" placeholder="Nacionalidad">
                                            <el-option label="Colombiana" value="1" />
                                            <el-option label="Extranjera" value="2" />
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Tipo de Documento" prop="tipoDocumento" class="select-width">
                                        <el-select v-model="ruleFormDatosGestante.tipoDocumento"
                                            placeholder="Tipo de Documento">
                                            <el-option label="Registro civil" value="1" />
                                            <el-option label="Tarjeta de identidad" value="3" />
                                            <el-option label="Menor sin identificar" value="4" />
                                            <el-option label="Adulto sin identificar" value="5" />
                                            <el-option label="Cedula de ciudadanía" value="6" />
                                            <el-option label="Pasaporte" value="7" />
                                            <el-option label="Salvo conducto" value="8" />
                                            <el-option label="Permiso especial de permanencia" value="9" />
                                            <el-option label="Cedula de extranjería" value="10" />
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Número de identificación" prop="documentNumber">
                                        <el-input v-model="ruleFormDatosGestante.documentNumber" type="number" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Edad" prop="edad">
                                        <el-input v-model="ruleFormDatosGestante.edad" type="number" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Tipo de regimen de salud" prop="tipoRegimenSalud"
                                        class="select-width">
                                        <el-select v-model="ruleFormDatosGestante.tipoRegimenSalud"
                                            placeholder="Tipo de regimen de salud">
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
                                        <el-input v-model="ruleFormDatosGestante.nombreAseguradora" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Pertenencia etnica" prop="pertenenciaEtnica" class="select-width">
                                        <el-select v-model="ruleFormDatosGestante.pertenenciaEtnica"
                                            placeholder="Pertenencia etnica">
                                            <el-option label="Palenquera" value="1" />
                                            <el-option label="Afrocolombiana" value="2" />
                                            <el-option label="Indigena" value="3" />
                                            <el-option label="Raizal" value="4" />
                                            <el-option label="Otro" value="5" />
                                            <el-option label="Rom" value="6" />
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Grupo poblacional" prop="grupoPoblacional" class="select-width">
                                        <el-select v-model="ruleFormDatosGestante.grupoPoblacional"
                                            placeholder="Grupo poblacional">
                                            <el-option label="Desplazada" value="1" />
                                            <el-option label="Migrante" value="2" />
                                            <el-option label="Victima de violencia armada" value="3" />
                                            <el-option label="Discapacitada" value="4" />
                                            <el-option label="Carceleria" value="5" />
                                            <el-option label="Habitante de calle" value="6" />
                                            <el-option label="Centro psiquiatrico" value="7" />
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Area de ocurrencia" prop="areaOcurrencia" class="select-width">
                                        <el-select v-model="ruleFormDatosGestante.areaOcurrencia"
                                            placeholder="Area de ocurrencia">
                                            <el-option label="Cabecera municipal" value="1" />
                                            <el-option label="Centro poblado" value="2" />
                                            <el-option label="Rural disperso" value="3" />
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Departamento de residencia" prop="dptoResidencia"
                                        class="select-width">
                                        <el-select v-model="ruleFormDatosGestante.dptoResidencia"
                                            placeholder="Departamento de residencia">
                                            <el-option label="Colombia" value="1" />
                                            <el-option label="Panama" value="2" />
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Municipio de residencia" prop="municipioResidencia"
                                        class="select-width">
                                        <el-select v-model="ruleFormDatosGestante.municipioResidencia"
                                            placeholder="Municipio de residencia">
                                            <el-option label="Colombia" value="1" />
                                            <el-option label="Panama" value="2" />
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Direccion de residencia" prop="direccionResidencia">
                                        <el-input v-model="ruleFormDatosGestante.direccionResidencia" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Teléfono" prop="telefono">
                                        <el-input v-model="ruleFormDatosGestante.telefono" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Departamento donde recibe atención" prop="dptoAtencion"
                                        class="select-width">
                                        <el-select v-model="ruleFormDatosGestante.dptoAtencion"
                                            placeholder="Departamento donde recibe atención">
                                            <el-option label="Colombia" value="1" />
                                            <el-option label="Panama" value="2" />
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Municipio donde recibe atención" prop="municipioAtencion"
                                        class="select-width">
                                        <el-select v-model="ruleFormDatosGestante.municipioAtencion"
                                            placeholder="Municipio donde recibe atención">
                                            <el-option label="Colombia" value="1" />
                                            <el-option label="Panama" value="2" />
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row class="row-bg" justify="end">
                                <div class="btn-save">
                                    <el-button type="primary" size="default" @click="submitForm(firstForm, 'end')">guardar y
                                        continuar</el-button>
                                </div>
                            </el-row>
                        </section>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="Diagnostico" name="second" ref="elTab2">
                    <el-form style="width: 100%;" label-width="180px" class="demo-ruleForm" :size="formSize" status-icon
                        ref="secondForm" :label-position="labelPosition">
                        <section style="width: 100%;">
                            <el-row :gutter="10" style="width: 100%;">
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Condición en el momento del diagnostico" prop="nacionalidad"
                                        class="select-width">
                                        <el-select v-model="ruleFormHbDatosGestante.nacionalidad"
                                            placeholder="Nacionalidad">
                                            <el-option label="Diagnostico antes de la gestación actual" value="1" />
                                            <el-option label="Embarazo" value="2" />
                                            <el-option label="Parto" value="2" />
                                            <el-option label="Puerperio" value="2" />
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <label>Si el diagnostico se realiza durante la gestación indique la edad gestacional en
                                        semanas:</label>
                                    <el-form-item label="semanas" prop="nombreAseguradora">
                                        <el-input v-model="ruleFormDatosGestante.nombreAseguradora" type="number" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <label>Edad gestacional en semanas del primer control prenatal:</label>
                                    <el-form-item label="semanas" prop="nombreAseguradora">
                                        <el-input v-model="ruleFormDatosGestante.nombreAseguradora" type="number" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="column-custom">
                                    <label class="label-field" style="min-width:180px">Fecha probable del parto</label>
                                    <el-date-picker v-model="ruleFormHbDatosGestante.fechaIngreso" type="date"
                                        placeholder="Fecha probable del parto" :format="dateFormat" :size="size" />
                                </el-col>
                                <el-col :span="24">
                                    <h4>ALGORITMO UTILIZADO PARA CONFIRMAR EL DIAGNOSTICO DE ENFERDAD DE CHAGAS:</h4>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="column-custom mb">
                                    <label class="title-field"
                                        style="min-width: 180px !important;width:inherit !important">Sospecha de enfermedad
                                        de chagas agudo:</label><br />
                                    <el-radio-group v-model="ruleFormHbDiagnosticoHb.ResultadosAnticuerpo1">
                                        <el-radio :label="0">Aplica</el-radio>
                                        <el-radio :label="1">No Aplica</el-radio>
                                    </el-radio-group>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <div class="demo-collapse">
                                        <el-collapse>
                                            <el-collapse-item title="EXAMEN PARASITOLOGICO" name="1">
                                                <div>
                                                    <el-row :gutter="20">
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="align-end">
                                                            <el-checkbox label="Gota gruesa a partir de sangre fresca"
                                                                size="large" border />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number" step="0.1" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="align-end">
                                                            <el-checkbox label="Frotis o extendido a partir de sangre"
                                                                size="large" border />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number" step="0.1" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="align-end">
                                                            <el-checkbox label="Microhematocrito" size="large" border />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number" step="0.1" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="align-end">
                                                            <el-checkbox label="Método de strout" size="large" border />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number" step="0.1" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="align-end">
                                                            <el-checkbox label="Micrométodo" size="large" border />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number" step="0.1" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de recolección de muestra</label>
                                                            <el-date-picker style="margin-bottom:8px"
                                                                v-model="ruleFormHbDiagnosticoHb.fechaResultadoCargaViralMl"
                                                                type="date" placeholder="Fecha de recolección de muestra"
                                                                :format="dateFormat" :size="size" />
                                                        </el-col>
                                                    </el-row>

                                                </div>
                                            </el-collapse-item>
                                        </el-collapse>
                                    </div>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="column-custom mb mt">
                                    <label class="title-field"
                                        style="min-width: 180px !important;width:inherit !important">Sospecha de enfermedad
                                        de chagas cronico o tamizaje del control prenatal:</label><br />
                                    <el-radio-group v-model="ruleFormHbDiagnosticoHb.ResultadosAnticuerpo1">
                                        <el-radio :label="0">Aplica</el-radio>
                                        <el-radio :label="1">No Aplica</el-radio>
                                    </el-radio-group>
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
                                                                <el-input type="number" step="0.1" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de recolección de muestra</label>
                                                            <el-date-picker style="margin-bottom:8px"
                                                                v-model="ruleFormHbDiagnosticoHb.fechaResultadoCargaViralMl"
                                                                type="date" placeholder="Fecha de recolección de muestra"
                                                                :format="dateFormat" :size="size" />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de emisión del resultado</label>
                                                            <el-date-picker style="margin-bottom:8px"
                                                                v-model="ruleFormHbDiagnosticoHb.fechaResultadoCargaViralMl"
                                                                type="date" placeholder="Fecha de emisión"
                                                                :format="dateFormat" :size="size" />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="align-end">
                                                            <h5>Prueba confirmatoria ELISA con Antigenos recombinantes</h5>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number" step="0.1" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de recolección de muestra</label>
                                                            <el-date-picker style="margin-bottom:8px"
                                                                v-model="ruleFormHbDiagnosticoHb.fechaResultadoCargaViralMl"
                                                                type="date" placeholder="Fecha de recolección de muestra"
                                                                :format="dateFormat" :size="size" />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de emisión del resultado</label>
                                                            <el-date-picker style="margin-bottom:8px"
                                                                v-model="ruleFormHbDiagnosticoHb.fechaResultadoCargaViralMl"
                                                                type="date" placeholder="Fecha de emisión"
                                                                :format="dateFormat" :size="size" />
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
                                                                <el-input type="number" step="0.1" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de recolección de muestra</label>
                                                            <el-date-picker style="margin-bottom:8px"
                                                                v-model="ruleFormHbDiagnosticoHb.fechaResultadoCargaViralMl"
                                                                type="date" placeholder="Fecha de recolección de muestra"
                                                                :format="dateFormat" :size="size" />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de emisión del resultado</label>
                                                            <el-date-picker style="margin-bottom:8px"
                                                                v-model="ruleFormHbDiagnosticoHb.fechaResultadoCargaViralMl"
                                                                type="date" placeholder="Fecha de emisión"
                                                                :format="dateFormat" :size="size" />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="align-end mt">
                                                            <h5>Prueba confirmatoria ELISA con Antigenos recombinantes</h5>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt">
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number" step="0.1" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de recolección de muestra</label>
                                                            <el-date-picker style="margin-bottom:8px"
                                                                v-model="ruleFormHbDiagnosticoHb.fechaResultadoCargaViralMl"
                                                                type="date" placeholder="Fecha de recolección de muestra"
                                                                :format="dateFormat" :size="size" />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de emisión del resultado</label>
                                                            <el-date-picker style="margin-bottom:8px"
                                                                v-model="ruleFormHbDiagnosticoHb.fechaResultadoCargaViralMl"
                                                                type="date" placeholder="Fecha de emisión"
                                                                :format="dateFormat" :size="size" />
                                                        </el-col>
                                                    </el-row>

                                                </div>
                                            </el-collapse-item>
                                        </el-collapse>
                                    </div>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="12" class="column-custom mb mt">
                                    <label class="title-field"
                                        style="min-width: 180px !important;width:inherit !important">Caso confirmado de
                                        gestante con enferdad de chagas:</label><br />
                                    <el-radio-group v-model="ruleFormHbDiagnosticoHb.ResultadosAnticuerpo1">
                                        <el-radio :label="1">Si</el-radio>
                                        <el-radio :label="0">No</el-radio>
                                    </el-radio-group>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="12" class="column-custom mb mt">
                                    <label class="title-field"
                                        style="min-width: 180px !important;width:inherit !important">Caso de gestante
                                        descartado con enferdad de chagas:</label><br />
                                    <el-radio-group v-model="ruleFormHbDiagnosticoHb.ResultadosAnticuerpo1">
                                        <el-radio :label="1">Si</el-radio>
                                        <el-radio :label="0">No</el-radio>
                                    </el-radio-group>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="column-custom mb mt">
                                    <label class="title-field"
                                        style="min-width: 180px !important;width:inherit !important">Número de hijos
                                        diferentes al fruto del embarazo en curso a los que se les debe realizar pruebas de
                                        diagnostico de Chagas:</label>
                                    <el-form-item label="Nro de Hijos" prop="nombreAseguradora">
                                        <el-input v-model="ruleFormDatosGestante.nombreAseguradora" type="number" />
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </section>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="Tratamiento materno" name="third" ref="elTab3">
                    <el-form style="width: 100%;" label-width="180px" class="demo-ruleForm" :size="formSize" status-icon
                        ref="secondForm" :label-position="labelPosition">
                        <section style="width: 100%;">
                            <el-row :gutter="10" style="width: 100%;">
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Medicamento suministrado" prop="tipoDocumento"
                                        class="select-width">
                                        <el-select v-model="ruleFormHbDatosGestante.tipoDocumento"
                                            placeholder="Medicamento suministrado">
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
                                    <el-date-picker style="margin-bottom:8px"
                                        v-model="ruleFormHbDiagnosticoHb.fechaResultadoCargaViralMl" type="date"
                                        placeholder="Fecha de emisión" :format="dateFormat" :size="size" />
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
                                    <el-radio-group v-model="ruleFormTercerReporte.suprecionDeLactancia">
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
                    <el-form style="width: 100%;" label-width="180px" class="demo-ruleForm" :size="formSize" status-icon
                        ref="firstForm" :label-position="labelPosition">
                        <section style="width: 100%;">
                            <el-row :gutter="10" style="width: 100%;">
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="column-custom">
                                    <label class="label-field title-field" style="width:200px;margin-right: 10px;">Fecha de
                                        nacimiento</label>
                                    <el-date-picker type="date" placeholder="Fecha de nacimiento" :format="dateFormat"
                                        :size="size" />
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="column-custom mb">
                                    <label class="title-field">Condición del recien nacido</label><br />
                                    <el-radio-group>
                                        <el-radio :label="1">Vivo</el-radio>
                                        <el-radio :label="2">Mortinato</el-radio>
                                    </el-radio-group>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="column-custom mb">
                                    <label class="title-field">Número de productos al nacimiento</label>
                                    <el-radio-group>
                                        <el-radio :label="1">único</el-radio>
                                        <el-radio :label="2">Multiple</el-radio>
                                    </el-radio-group>
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
                                    <label class="title-field">Sexo</label>
                                    <el-radio-group>
                                        <el-radio :label="1">Hombre</el-radio>
                                        <el-radio :label="2">Mujer</el-radio>
                                        <el-radio :label="3">Intersexual</el-radio>
                                    </el-radio-group>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="column-custom mb">
                                    <label class="title-field">Tipo de parto</label><br />
                                    <el-radio-group>
                                        <el-radio :label="1">Cesarea</el-radio>
                                        <el-radio :label="2">Vaginal</el-radio>
                                    </el-radio-group>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Tipo de regimen de salud" prop="tipoRegimenSalud"
                                        class="select-width">
                                        <el-select v-model="ruleFormDatosGestante.tipoRegimenSalud"
                                            placeholder="Tipo de regimen de salud">
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
                                        <el-input v-model="ruleFormDatosGestante.nombreAseguradora" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Nombres y Apellidos" prop="nombresApellidos">
                                        <el-input v-model="ruleFormDatosGestante.nombresApellidos" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Tipo de Documento" prop="tipoDocumento" class="select-width">
                                        <el-select v-model="ruleFormDatosGestante.tipoDocumento"
                                            placeholder="Tipo de Documento">
                                            <el-option label="RC" value="1" />
                                            <el-option label="CNV" value="2" />
                                            <el-option label="MS" value="3" />

                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Número de identificación" prop="documentNumber">
                                        <el-input v-model="ruleFormHbDatosGestante.documentNumber" type="number" />
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </section>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="Diagnostico" name="secondKid" ref="elTabKid2">
                    <el-form style="width: 100%;" label-width="180px" class="demo-ruleForm" :size="formSize" status-icon
                        ref="firstForm" :label-position="labelPosition">
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
                                                                <el-input type="number" step="0.1" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="align-end">
                                                            <el-checkbox label="Frotis o extendido a partir de sangre"
                                                                size="large" border />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number" step="0.1" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="align-end">
                                                            <el-checkbox label="Microhematocrito" size="large" border />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number" step="0.1" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="align-end">
                                                            <el-checkbox label="Método de strout" size="large" border />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number" step="0.1" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="align-end">
                                                            <el-checkbox label="Micrométodo" size="large" border />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number" step="0.1" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de recolección de muestra</label>
                                                            <el-date-picker style="margin-bottom:8px"
                                                                v-model="ruleFormHbDiagnosticoHb.fechaResultadoCargaViralMl"
                                                                type="date" placeholder="Fecha de recolección de muestra"
                                                                :format="dateFormat" :size="size" />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de emisión del resultado</label>
                                                            <el-date-picker style="margin-bottom:8px"
                                                                v-model="ruleFormHbDiagnosticoHb.fechaResultadoCargaViralMl"
                                                                type="date" placeholder="Fecha de emisión del resultado"
                                                                :format="dateFormat" :size="size" />
                                                        </el-col>
                                                    </el-row>

                                                </div>
                                            </el-collapse-item>
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"
                                                class="column-custom mb mt">
                                                <label class="title-field"
                                                    style="min-width: 180px !important;width:inherit !important">Prueba de
                                                    diagnostico a los 3 meses de nacido, en caso de que la prueba de
                                                    diagnóstico al nacer sea NEGATIVA</label><br />
                                                <el-radio-group v-model="ruleFormHbDiagnosticoHb.ResultadosAnticuerpo1">
                                                    <el-radio :label="0">Aplica</el-radio>
                                                    <el-radio :label="1">No Aplica</el-radio>
                                                </el-radio-group>
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
                                                                <el-input type="number" step="0.1" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="align-end">
                                                            <el-checkbox label="Frotis o extendido a partir de sangre"
                                                                size="large" border />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number" step="0.1" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="align-end">
                                                            <el-checkbox label="Microhematocrito" size="large" border />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number" step="0.1" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="align-end">
                                                            <el-checkbox label="Método de strout" size="large" border />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number" step="0.1" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="align-end">
                                                            <el-checkbox label="Micrométodo" size="large" border />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number" step="0.1" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de recolección de muestra</label>
                                                            <el-date-picker style="margin-bottom:8px"
                                                                v-model="ruleFormHbDiagnosticoHb.fechaResultadoCargaViralMl"
                                                                type="date" placeholder="Fecha de recolección de muestra"
                                                                :format="dateFormat" :size="size" />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de emisión del resultado</label>
                                                            <el-date-picker style="margin-bottom:8px"
                                                                v-model="ruleFormHbDiagnosticoHb.fechaResultadoCargaViralMl"
                                                                type="date" placeholder="Fecha de emisión del resultado"
                                                                :format="dateFormat" :size="size" />
                                                        </el-col>
                                                    </el-row>
                                                </div>
                                            </el-collapse-item>
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"
                                                class="column-custom mb mt">
                                                <label class="title-field"
                                                    style="min-width: 180px !important;width:inherit !important">Prueba de
                                                    diagnostico molecular por criterio clínico o
                                                    epidemiológico</label><br />
                                                <el-radio-group v-model="ruleFormHbDiagnosticoHb.ResultadosAnticuerpo1">
                                                    <el-radio :label="0">Si Aplica</el-radio>
                                                    <el-radio :label="1">No Aplica</el-radio>
                                                </el-radio-group>
                                            </el-col>
                                            <el-collapse-item title="Prueba de diagnostico al nacer" name="3">
                                                <div>
                                                    <el-row :gutter="20">
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Reacción
                                                                en cadena polimerasa (PCR)</label>
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number" step="0.1" />
                                                            </el-form-item>
                                                        </el-col>

                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de recolección de muestra</label>
                                                            <el-date-picker style="margin-bottom:8px"
                                                                v-model="ruleFormHbDiagnosticoHb.fechaResultadoCargaViralMl"
                                                                type="date" placeholder="Fecha de recolección de muestra"
                                                                :format="dateFormat" :size="size" />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de emisión del resultado</label>
                                                            <el-date-picker style="margin-bottom:8px"
                                                                v-model="ruleFormHbDiagnosticoHb.fechaResultadoCargaViralMl"
                                                                type="date" placeholder="Fecha de emisión del resultado"
                                                                :format="dateFormat" :size="size" />
                                                        </el-col>
                                                    </el-row>
                                                </div>
                                            </el-collapse-item>
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"
                                                class="column-custom mb mt">
                                                <label class="title-field"
                                                    style="min-width: 180px !important;width:inherit !important">Pruebas de
                                                    diagnostico serológico a los 8 a 10 meses de nacido si las pruebas de
                                                    diagnóstico directo al momento del nacimiento y a los tre meses de naces
                                                    son negativas</label><br />
                                                <el-radio-group v-model="ruleFormHbDiagnosticoHb.ResultadosAnticuerpo1">
                                                    <el-radio :label="0">Si Aplica</el-radio>
                                                    <el-radio :label="1">No Aplica</el-radio>
                                                </el-radio-group>
                                            </el-col>
                                            <el-collapse-item title="Prueba de diagnostico al nacer" name="4">
                                                <div>
                                                    <el-row :gutter="20">
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom mt mb">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Antígenos</label>
                                                            <el-select v-model="antigenosValue" multiple
                                                                placeholder="Select" style="width: 100%">
                                                                <el-option v-for="item in antigenos" :key="item.value"
                                                                    :label="item.label" :value="item.value" />
                                                            </el-select>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="column-custom mt mb" style="align-items:end">
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number" step="0.1" />
                                                            </el-form-item>
                                                        </el-col>

                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de recolección de muestra</label>
                                                            <el-date-picker style="margin-bottom:8px"
                                                                v-model="ruleFormHbDiagnosticoHb.fechaResultadoCargaViralMl"
                                                                type="date" placeholder="Fecha de recolección de muestra"
                                                                :format="dateFormat" :size="size" />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de emisión del resultado</label>
                                                            <el-date-picker style="margin-bottom:8px"
                                                                v-model="ruleFormHbDiagnosticoHb.fechaResultadoCargaViralMl"
                                                                type="date" placeholder="Fecha de emisión del resultado"
                                                                :format="dateFormat" :size="size" />
                                                        </el-col>
                                                    </el-row>
                                                </div>
                                            </el-collapse-item>
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"
                                                class="column-custom mb mt">
                                                <label class="title-field"
                                                    style="min-width: 180px !important;width:inherit !important">Caso
                                                    confirmado de TMI de la enfermedad de chagas</label><br />
                                                <el-radio-group v-model="ruleFormHbDiagnosticoHb.ResultadosAnticuerpo1">
                                                    <el-radio :label="1">Si</el-radio>
                                                    <el-radio :label="0">No</el-radio>
                                                </el-radio-group>
                                            </el-col>
                                        </el-collapse>
                                    </div>
                                </el-col>
                            </el-row>
                        </section>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="Tratamiento del menor" name="thirdKid" ref="elTabKid3">
                    <el-form style="width: 100%;" label-width="180px" class="demo-ruleForm" :size="formSize" status-icon
                        ref="secondForm" :label-position="labelPosition">
                        <section style="width: 100%;">
                            <el-row :gutter="10" style="width: 100%;">
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <h4 class="align-start">TRATAMIENTO Y SEGUIMIENTO DEL NIÑO O NIÑA CONFIRMADO CON
                                        ENFERMEDAD DE CHAGAS CONGENITO</h4>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Medicamento suministrado" prop="tipoDocumento"
                                        class="select-width">
                                        <el-select v-model="ruleFormHbDatosGestante.tipoDocumento"
                                            placeholder="Medicamento suministrado">
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
                                    <el-date-picker style="margin-bottom:8px"
                                        v-model="ruleFormHbDiagnosticoHb.fechaResultadoCargaViralMl" type="date"
                                        placeholder="Fecha de emisión" :format="dateFormat" :size="size" />
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
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <div class="demo-collapse">
                                        <el-collapse v-model="activeCollapseKids1">
                                            <el-collapse-item title="Prueba de serología a los 6 meses de terminar el tratamiento" name="1">
                                                <div>
                                                    <el-row :gutter="20">
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom mt mb">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Antígenos</label>
                                                            <el-select v-model="antigenosValue" multiple
                                                                placeholder="Select" style="width: 100%">
                                                                <el-option v-for="item in antigenos" :key="item.value"
                                                                    :label="item.label" :value="item.value" />
                                                            </el-select>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="column-custom mt mb" style="align-items:end">
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number" step="0.1" />
                                                            </el-form-item>
                                                        </el-col>

                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de recolección de muestra</label>
                                                            <el-date-picker style="margin-bottom:8px"
                                                                v-model="ruleFormHbDiagnosticoHb.fechaResultadoCargaViralMl"
                                                                type="date" placeholder="Fecha de recolección de muestra"
                                                                :format="dateFormat" :size="size" />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de emisión del resultado</label>
                                                            <el-date-picker style="margin-bottom:8px"
                                                                v-model="ruleFormHbDiagnosticoHb.fechaResultadoCargaViralMl"
                                                                type="date" placeholder="Fecha de emisión del resultado"
                                                                :format="dateFormat" :size="size" />
                                                        </el-col>
                                                    </el-row>
                                                </div>
                                            </el-collapse-item> 
                                            <el-collapse-item title="Prueba de serología a los 12 meses de terminar el tratamiento" name="2">
                                                <div>
                                                    <el-row :gutter="20">
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom mt mb">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Antígenos</label>
                                                            <el-select v-model="antigenosValue" multiple
                                                                placeholder="Select" style="width: 100%">
                                                                <el-option v-for="item in antigenos" :key="item.value"
                                                                    :label="item.label" :value="item.value" />
                                                            </el-select>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="column-custom mt mb" style="align-items:end">
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number" step="0.1" />
                                                            </el-form-item>
                                                        </el-col>

                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de recolección de muestra</label>
                                                            <el-date-picker style="margin-bottom:8px"
                                                                v-model="ruleFormHbDiagnosticoHb.fechaResultadoCargaViralMl"
                                                                type="date" placeholder="Fecha de recolección de muestra"
                                                                :format="dateFormat" :size="size" />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            class="column-custom" style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de emisión del resultado</label>
                                                            <el-date-picker style="margin-bottom:8px"
                                                                v-model="ruleFormHbDiagnosticoHb.fechaResultadoCargaViralMl"
                                                                type="date" placeholder="Fecha de emisión del resultado"
                                                                :format="dateFormat" :size="size" />
                                                        </el-col>
                                                    </el-row>
                                                </div>
                                            </el-collapse-item> 
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"
                                                class="column-custom mb mt">
                                                <label class="title-field"
                                                    style="min-width: 180px !important;width:inherit !important">Niño curado de la enfermedad de chagas</label><br />
                                                <el-radio-group v-model="ruleFormHbDiagnosticoHb.ResultadosAnticuerpo1">
                                                    <el-radio :label="1">Si</el-radio>
                                                    <el-radio :label="0">No</el-radio>
                                                </el-radio-group>
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
type FormInstance = InstanceType<typeof ElForm>

@Options({
    components: {},
})

export default class HepatitisBView extends Vue {

    activeName = 'first'
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

    ruleFormDatosGestante = reactive<RuleFormDatosGestante>({
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
        dptoAtencion: [],
        municipioAtencion: []
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
        tarEnInterparto: false,
        esquemaArvEnInterparto: [],
        condicionRecienNacido: false,
        numeroDeProductosAlNacimiento: false,
        edadGestacionalAlNacimientoEnSemana: new Date,
        pesoEnGramos: 0,
        sexo: [],
        tipoParto: [],
        suprecionDeLactancia: false,
        medicamentoSuministrado: false,
        otroMedicamento: '',
    })

    rulesDatosGestante = reactive<FormRules<RuleFormDatosGestante>>({
        nombresApellidos: [
            { required: true, message: 'Por favor digite los nombre(s) y apellido(s) completos', trigger: 'blur' },
            { min: 3, max: 50, message: 'debe tener una longitud entre 2 a 50 caracteres', trigger: 'blur' },
        ],
        nacionalidad: [
            {
                required: true,
                message: 'Por favor seleccione la nacionalidad',
                trigger: 'change',
            },
        ],
        tipoDocumento: [
            {
                required: true,
                message: 'Por favor seleccione el tipo de identificación',
                trigger: 'change',
            },
        ],
        documentNumber: [
            { required: true, message: 'Por favor digite el número de documento', trigger: 'blur' },
            { min: 2, max: 12, message: 'debe tener una longitud entre 2 a 12 caracteres', trigger: 'blur' },
        ],
        edad: [
            { required: true, message: 'Por favor digite la edad', trigger: 'blur' },
            { min: 1, max: 3, message: 'debe tener una longitud entre 1 a 3 caracteres', trigger: 'blur' },
        ],
        tipoRegimenSalud: [
            {
                required: true,
                message: 'Por favor seleccione un regimen de salud',
                trigger: 'change',
            },
        ],
        nombreAseguradora: [
            { required: true, message: 'Por favor digite el nombre de la aseguradora', trigger: 'blur' },
            { min: 1, max: 30, message: 'debe tener una longitud entre 1 a 30 caracteres', trigger: 'blur' },
        ],
        pertenenciaEtnica: [
            {
                required: true,
                message: 'Por favor seleccione la pertenencia etnica',
                trigger: 'change',
            },
        ],
        grupoPoblacional: [
            {
                required: true,
                message: 'Por favor seleccione un grupo poblacional',
                trigger: 'change',
            },
        ],
        areaOcurrencia: [
            {
                required: true,
                message: 'Por favor seleccione el area de ocurrencia',
                trigger: 'change',
            },
        ],
        dptoResidencia: [
            {
                required: true,
                message: 'Por favor seleccione el departamento de residencia',
                trigger: 'change',
            },
        ],
        municipioResidencia: [
            {
                required: true,
                message: 'Por favor seleccione el municipio de residencia',
                trigger: 'change',
            },
        ],
        direccionResidencia: [
            { required: true, message: 'Por favor digite la dirección de residencia', trigger: 'blur' },
            { min: 1, max: 50, message: 'debe tener una longitud entre 1 a 50 caracteres', trigger: 'blur' },
        ],
        telefono: [
            { required: true, message: 'Por favor digite el teléfono', trigger: 'blur' },
            { min: 1, max: 30, message: 'debe tener una longitud entre 1 a 30 caracteres', trigger: 'blur' },
        ],
        dptoAtencion: [
            {
                required: true,
                message: 'Por favor seleccione el departamento de atención',
                trigger: 'change',
            },
        ],
        municipioAtencion: [
            {
                required: true,
                message: 'Por favor seleccione el municipio de atención',
                trigger: 'change',
            },
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
    }
}
</style>