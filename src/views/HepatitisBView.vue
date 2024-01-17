<template class="steps-container">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="Datos gestante" name="first" ref="elTab1">

            <el-form :model="ruleFormHbDatosGestante" :rules="rulesHbDatosGestante" style="width: 100%;" label-width="180px"
                class="demo-ruleForm" :size="formSize" status-icon ref="firstForm" :label-position="labelPosition">
                <section style="width: 100%;">
                    <el-row :gutter="10" style="width: 100%;">
                        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                            <h5 class="align-start">DATOS DE LA GESTANTE CON DIAGNOSTICO DE HEPATITIS B</h5>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="column-custom">
                            <label class="label-field" style="min-width:180px">Fecha de ingreso a la estrategia</label>
                            <el-date-picker v-model="ruleFormHbDatosGestante.fechaIngreso" type="date"
                                placeholder="Fecha probable del parto" :format="dateFormat" :size="size" />
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                            <el-form-item label="Nombres y Apellidos" prop="nombresApellidos">
                                <el-input v-model="ruleFormHbDatosGestante.nombresApellidos" />
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                            <el-form-item label="Nacionalidad" prop="nacionalidad" class="select-width">
                                <el-select v-model="ruleFormHbDatosGestante.nacionalidad" placeholder="Nacionalidad">
                                    <el-option label="Colombiana" value="1" />
                                    <el-option label="Extranjera" value="2" />
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                            <el-form-item label="Tipo de Documento" prop="tipoDocumento" class="select-width">
                                <el-select v-model="ruleFormHbDatosGestante.tipoDocumento" placeholder="Tipo de Documento">
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
                                <el-input v-model="ruleFormHbDatosGestante.documentNumber" type="number" />
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                            <el-form-item label="Edad" prop="edad">
                                <el-input v-model="ruleFormHbDatosGestante.edad" type="number" />
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                            <el-form-item label="Tipo de regimen de salud" prop="tipoRegimenSalud" class="select-width">
                                <el-select v-model="ruleFormHbDatosGestante.tipoRegimenSalud"
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
                                <el-input v-model="ruleFormHbDatosGestante.nombreAseguradora" />
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                            <el-form-item label="Pertenencia etnica" prop="pertenenciaEtnica" class="select-width">
                                <el-select v-model="ruleFormHbDatosGestante.pertenenciaEtnica"
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
                                <el-select v-model="ruleFormHbDatosGestante.grupoPoblacional"
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
                                <el-select v-model="ruleFormHbDatosGestante.areaOcurrencia"
                                    placeholder="Area de ocurrencia">
                                    <el-option label="Cabecera municipal" value="1" />
                                    <el-option label="Centro poblado" value="2" />
                                    <el-option label="Rural disperso" value="3" />
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                            <el-form-item label="Departamento de residencia" prop="dptoResidencia" class="select-width">
                                <el-select v-model="ruleFormHbDatosGestante.dptoResidencia"
                                    placeholder="Departamento de residencia">
                                    <el-option label="Colombia" value="1" />
                                    <el-option label="Panama" value="2" />
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                            <el-form-item label="Municipio de residencia" prop="municipioResidencia" class="select-width">
                                <el-select v-model="ruleFormHbDatosGestante.municipioResidencia"
                                    placeholder="Municipio de residencia">
                                    <el-option label="Colombia" value="1" />
                                    <el-option label="Panama" value="2" />
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                            <el-form-item label="Direccion de residencia" prop="direccionResidencia">
                                <el-input v-model="ruleFormHbDatosGestante.direccionResidencia" />
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                            <el-form-item label="Teléfono" prop="telefono">
                                <el-input v-model="ruleFormHbDatosGestante.telefono" />
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="mb">
                            <label>¿A la gestante se le realizo control prenatal durante el embarazo?</label><br />
                            <el-radio-group v-model="ruleFormHbDatosGestante.ctrlPrenatalEnEmbarazo">
                                <el-radio :label="1">Si</el-radio>
                                <el-radio :label="2">No</el-radio>
                            </el-radio-group>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                            <el-form-item label="Edad gestacional al primer control prenatal, en semanas" prop="edad">
                                <el-input v-model="ruleFormHbDatosGestante.edadGestacionalEnPrimerCtrlenSemanas"
                                    type="number" />
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="column-custom">
                            <!--<el-form-item label="Fecha" prop="fecha">
                                <el-input v-model="ruleFormSegundoReporte.fecha" />
                            </el-form-item>-->
                            <label class="label-field" style="min-width:180px">Fecha probable del parto</label>
                            <el-date-picker v-model="ruleFormHbDatosGestante.fechaProbableParto" type="date"
                                placeholder="Fecha probable del parto" :format="dateFormat" :size="size" />
                        </el-col>
                    </el-row>
                </section>
            </el-form>
        </el-tab-pane>
        <el-tab-pane label="Diagnostico" name="two" ref="elTab2">

            <el-form :model="ruleFormHbDiagnosticoHb" :rules="rulesDiagnosticoHb" style="width: 100%;" label-width="180px"
                class="demo-ruleForm" :size="formSize" status-icon ref="secondForm" :label-position="labelPosition">
                <section style="width: 100%;">
                    <el-row :gutter="10" style="width: 100%;">
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <h5 class="align-start">DIAGNOSTICO DE HEPATITIS B EN LA GESTANTE</h5>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <el-form-item label="Momento del diagnostico, con relación al embarazo actual"
                                        prop="municipioResidencia" class="select-width">
                                        <el-select v-model="ruleFormHbDiagnosticoHb.MomentoDiagnostico"
                                            placeholder="Momento del diagnostico">
                                            <el-option label="Antes del embarazo actual" value="1" />
                                            <el-option label="Durante el embarazo actual" value="2" />
                                            <el-option label="Posterior al parto" value="3" />
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <h5 class="align-start">Antigeno de superficie de hepatitis B, con relación al embarazo
                                        actual:</h5>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="column-custom">
                                        <label class="label-field" style="min-width:180px">Fecha del resultado</label>
                                        <el-date-picker v-model="ruleFormHbDiagnosticoHb.FechaAntigenoSuperficieHb"
                                            type="date" placeholder="Fecha probable del parto" :format="dateFormat"
                                            :size="size" />
                                    </el-col>
                                </el-col>
                            </el-row>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <h5 class="align-start">Realización de anticuerpos IgM contra el antígeno core de HB
                                        (anti-HBc IgM):</h5>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <label>Resultado:</label><br />
                                    <el-radio-group v-model="ruleFormHbDiagnosticoHb.ResultadosAnticuerpo1">
                                        <el-radio :label="0">Reactivo</el-radio>
                                        <el-radio :label="1">No Reactivo</el-radio>
                                    </el-radio-group>
                                </el-col>
                            </el-row>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="column-custom" style="align-items:end">
                            <label class="label-field" style="min-width:180px;margin-bottom:14px">Fecha del
                                resultado</label>
                            <el-date-picker style="margin-bottom:8px"
                                v-model="ruleFormHbDiagnosticoHb.FechaResultadosAnticuerpo1" type="date"
                                placeholder="Fecha probable del parto" :format="dateFormat" :size="size" />
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <h5 class="align-start">Realización de anticuerpos IgM contra el antígeno core de HB
                                        (anti-HBc IgM):</h5>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <label>Resultado:</label><br />
                                    <el-radio-group v-model="ruleFormHbDiagnosticoHb.ResultadosAnticuerpo2">
                                        <el-radio :label="0">Reactivo</el-radio>
                                        <el-radio :label="1">No Reactivo</el-radio>
                                    </el-radio-group>
                                </el-col>
                            </el-row>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="column-custom" style="align-items:end">
                            <label class="label-field" style="min-width:180px;margin-bottom:14px">Fecha del
                                resultado</label>
                            <el-date-picker style="margin-bottom:8px"
                                v-model="ruleFormHbDiagnosticoHb.FechaResultadosAnticuerpo2" type="date"
                                placeholder="Fecha probable del parto" :format="dateFormat" :size="size" />
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <h5 class="align-start">Realización de anticuerpos IgM contra el antígeno core de HB
                                        (anti-HBc IgM):</h5>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <label>Resultado:</label><br />
                                    <el-radio-group v-model="ruleFormHbDiagnosticoHb.ResultadosAnticuerpo3">
                                        <el-radio :label="0">Reactivo</el-radio>
                                        <el-radio :label="1">No Reactivo</el-radio>
                                    </el-radio-group>
                                </el-col>
                            </el-row>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="column-custom" style="align-items:end">
                            <label class="label-field" style="min-width:180px;margin-bottom:14px">Fecha del
                                resultado</label>
                            <el-date-picker style="margin-bottom:8px"
                                v-model="ruleFormHbDiagnosticoHb.FechaResultadosAnticuerpo3" type="date"
                                placeholder="Fecha probable del parto" :format="dateFormat" :size="size" />
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <h5 class="align-start" style="margin-bottom:0">Resultado de Carga viral para Hepatitis
                                        B:</h5>
                                    <sub>Valor unidades internacionales/Ml</sub>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <el-form-item label="Resultado" prop="ResultadoCargaViralMl">
                                        <el-input v-model="ruleFormHbDiagnosticoHb.ResultadoCargaViralMl" type="number"
                                            step="0.1" />
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="column-custom" style="align-items:end">
                            <label class="label-field" style="min-width:180px;margin-bottom:14px">Fecha del
                                resultado</label>
                            <el-date-picker style="margin-bottom:8px"
                                v-model="ruleFormHbDiagnosticoHb.fechaResultadoCargaViralMl" type="date"
                                placeholder="Fecha probable del parto" :format="dateFormat" :size="size" />
                        </el-col>

                    </el-row>
                </section>
            </el-form>
        </el-tab-pane>
        <el-tab-pane label="Tratamiento y seguimiento" name="three" ref="elTab3">

            <el-form :model="ruleFormHbTratamiento" :rules="ruleSFormHbTratamiento" style="width: 100%;" label-width="180px"
                class="demo-ruleForm" :size="formSize" status-icon ref="thirdForm" :label-position="labelPosition">
                <section style="width: 100%;">
                    <el-row :gutter="10" style="width: 100%;">

                        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                            <h4 class="align-start">Tratamiento y seguimiento de la hepatitis B en la gestante</h4>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                            <h5 class="align-start">Gestante con diagnóstico de hepatitis B <span
                                    style="color:#ff4500">ANTES</span> del embarazo
                                actual:</h5>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                            <label>La gestante venia recibiendo tratamiento para HB antes de iniciar el
                                embarazo actual:</label><br />
                            <el-radio-group v-model="ruleFormHbTratamiento.tratadaAntesDelEmbarazo">
                                <el-radio :label="1">Si</el-radio>
                                <el-radio :label="0">No</el-radio>
                            </el-radio-group>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                            <label>¿La gestante requiere tratamiento para HB durante el embarazo
                                actual?:</label><br />
                            <el-radio-group v-model="ruleFormHbTratamiento.requiereTratamiento1">
                                <el-radio :label="1">Si</el-radio>
                                <el-radio :label="0">No</el-radio>
                            </el-radio-group>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                            <el-form-item label="A partir de que semana gestacional lo recibió:"
                                prop="semanaEnQueRecibioTratamiento1">
                                <el-input v-model="ruleFormHbTratamiento.semanaEnQueRecibioTratamiento1" type="number" />
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                            <h5 class="align-start">Gestante con diágnostico de hepatitis B <span
                                    style="color:#ff4500">DURANTE</span> el embarazo
                                actual:</h5>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                            <label>¿Requiere tratamiento para HB durante el embarazo actual?:</label><br />
                            <el-radio-group v-model="ruleFormHbTratamiento.requiereTratamiento2">
                                <el-radio :label="1">Si</el-radio>
                                <el-radio :label="0">No</el-radio>
                            </el-radio-group>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                            <el-form-item label="A partir de que semana gestacional lo recibió:"
                                prop="semanaEnQueRecibioTratamiento2">
                                <el-input v-model="ruleFormHbTratamiento.semanaEnQueRecibioTratamiento2" type="number" />
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <h5 class="align-start" style="margin-bottom:0">Nombre del medicamento
                                        suministrado a la gestante para el tratamiento de la HB:</h5>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <el-form-item label="medicamento suministrado:" prop="nombreMedicamentoSuministrado">
                                        <el-input v-model="ruleFormHbTratamiento.nombreMedicamentoSuministrado" />
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" style="align-items:center;display:flex">
                            <el-form-item label="Situación de la gestante con relación al embarazo actual:"
                                prop="situacionGestante" class="select-width">
                                <el-select v-model="ruleFormHbTratamiento.situacionGestante"
                                    placeholder="Situación de la gestante">
                                    <el-option label="Aborto" value="1" />
                                    <el-option label="IVE" value="2" />
                                    <el-option label="Mortalidad materna" value="3" />
                                    <el-option label="Parto" value="3" />
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </section>
            </el-form>
        </el-tab-pane>
        <el-tab-pane label="Seguimiento del menor expuesto" name="four" ref="elTab4">

            <el-form style="width: 100%;" label-width="180px" class="demo-ruleForm" :size="formSize" status-icon
                ref="fourForm" :label-position="labelPosition">
                <section style="width: 100%;">
                    <el-row :gutter="10" style="width: 100%;">

                        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                            <h4 class="align-start">Seguimiento del niño o niña expuesto al virus de la hepatis B</h4>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="column-custom mb">
                            <label class="title-field">Condición del recien nacido</label><br />
                            <el-radio-group>
                                <el-radio :label="1">Vivo</el-radio>
                                <el-radio :label="2">Mortinato</el-radio>
                            </el-radio-group>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="mb">
                            <el-form-item label="Edad gestacional al nacimiento, en semanas:">
                                <el-input type="number" />
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="column-custom mb">
                            <label class="title-field">Tipo de parto</label><br />
                            <el-radio-group>
                                <el-radio :label="1">Cesarea</el-radio>
                                <el-radio :label="2">Vaginal</el-radio>
                            </el-radio-group>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="column-custom mb">
                            <label class="title-field">Número de productos al nacimiento</label>
                            <el-radio-group>
                                <el-radio :label="1">único</el-radio>
                                <el-radio :label="2">Multiple</el-radio>
                            </el-radio-group>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="column-custom">
                            <label class="label-field" style="min-width:180px">Fecha del parto</label>
                            <el-date-picker type="date" placeholder="Fecha del parto" :format="dateFormat" :size="size" />
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="column-custom mb">
                            <label class="title-field">Sexo</label> 
                            <el-radio-group>
                                <el-radio :label="1">Hombre</el-radio>
                                <el-radio :label="2">Mujer</el-radio>
                                <el-radio :label="3">Intersexual</el-radio>
                            </el-radio-group>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                            <el-form-item label="Tipo de regimen en salud">
                                <el-input />
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                            <el-form-item label="Nombre aseguradora (EAPB)">
                                <el-input />
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                            <el-form-item label="Nombres y Apellidos">
                                <el-input />
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                            <el-form-item label="Tipo de Documento" prop="tipoDocumento" class="select-width">
                                <el-select v-model="ruleFormHbDatosGestante.tipoDocumento" placeholder="Tipo de Documento">
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
                                <el-input v-model="ruleFormHbDatosGestante.documentNumber" type="number" />
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                            <label>Aplicacion de la dosis de vacuna contra HB recien nacido:</label><br />
                            <el-radio-group v-model="ruleFormHbTratamiento.requiereTratamiento1">
                                <el-radio :label="1">Si</el-radio>
                                <el-radio :label="0">No</el-radio>
                            </el-radio-group>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                            <el-form-item label="Su aplicacion se hizo en que tiempo" prop="tipoDocumento"
                                class="select-width">
                                <el-select v-model="ruleFormHbDatosGestante.tipoDocumento"
                                    placeholder="Su aplicacion se hizo en que tiempo">
                                    <el-option label="En las primeras 12 horas " value="1" />
                                    <el-option label="Mayor a 12 horas y hasta 24 horas" value="3" />
                                    <el-option label="Despues de 24 horas" value="4" />
                                </el-select>

                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"></el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                            <el-form-item label="Vacuna">
                                <el-input />
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="column-custom">
                            <label class="label-field" style="min-width:180px">Fecha de aplicacion</label>
                            <el-date-picker type="date" placeholder="Fecha de aplicacion" :format="dateFormat"
                                :size="size" />
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                            <el-form-item label="Vacuna">
                                <el-input />
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="column-custom">
                            <label class="label-field" style="min-width:180px">Fecha de aplicacion</label>
                            <el-date-picker type="date" placeholder="Fecha de aplicacion" :format="dateFormat"
                                :size="size" />
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                            <el-form-item label="Vacuna">
                                <el-input />
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="column-custom">
                            <label class="label-field" style="min-width:180px">Fecha de aplicacion</label>
                            <el-date-picker type="date" placeholder="Fecha de aplicacion" :format="dateFormat"
                                :size="size" />
                        </el-col>
                    </el-row>
                </section>
            </el-form>
        </el-tab-pane>
        <el-tab-pane label="Clasificación" name="five" ref="elTab5">

            <el-form style="width: 100%;" label-width="180px" class="demo-ruleForm" :size="formSize" status-icon
                ref="fiveForm" :label-position="labelPosition">
                <section style="width: 100%;">
                    <el-row :gutter="10" style="width: 100%;">

                        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                            <h4 class="align-start">clasificación del niño o niña expuesto frente virus de la hepatis B</h4>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" style="text-align:left" class="mt mb">
                            <label>Realizacion de antigeno de superficie de la HB (HBs Ag):</label><br />
                            <el-radio-group v-model="ruleFormHbDiagnosticoHb.ResultadosAnticuerpo1">
                                <el-radio :label="0">Reactivo</el-radio>
                                <el-radio :label="1">No Reactivo</el-radio>
                            </el-radio-group>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="column-custom">
                            <label class="label-field" style="min-width:180px">Fecha de resultado</label>
                            <el-date-picker v-model="ruleFormHbDatosGestante.fechaIngreso" type="date"
                                placeholder="Fecha de resultado" :format="dateFormat" :size="size" />
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" style="text-align:left" class="mt mb">
                            <label>Realizacion del anticuerpo contra el antigeno de superficie de la HB(Anti-HBs)
                                :</label><br />
                            <el-radio-group v-model="ruleFormHbDiagnosticoHb.ResultadosAnticuerpo1">
                                <el-radio :label="0">Reactivo</el-radio>
                                <el-radio :label="1">No Reactivo</el-radio>
                            </el-radio-group>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="column-custom">
                            <label class="label-field" style="min-width:180px">Fecha de resultado</label>
                            <el-date-picker v-model="ruleFormHbDatosGestante.fechaIngreso" type="date"
                                placeholder="Fecha de resultado" :format="dateFormat" :size="size" />
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" style="text-align:left"
                            class="column-custom mb">
                            <label style="margin-right:8px">Condicion final de niño o niña expuesto </label><br />
                            <el-radio-group>
                                <el-radio :label="1">Vivo</el-radio>
                                <el-radio :label="2">muerto</el-radio>
                            </el-radio-group>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="column-custom">
                            <el-form-item label="Clasificaion del niño o niña expuesto frente al virus epatitis B"
                                prop="tipoDocumento" class="select-width" style="width:100%">
                                <el-select v-model="ruleFormHbDatosGestante.tipoDocumento"
                                    placeholder="Clasificaion del niño o niña expuesto">
                                    <el-option label="Infeccion por epatitis B confirmada " value="1" />
                                    <el-option label="MInfeccion por epatitis B descartada " value="2" />
                                    <el-option label="Fallecio sin clasificaion" value="3" />
                                </el-select>

                            </el-form-item>
                        </el-col>
                    </el-row>
                </section>
            </el-form>
        </el-tab-pane>
        <el-tab-pane label="Reporte de datos " name="six" ref="elTab6">
            <el-form style="width: 100%;" label-width="180px" class="demo-ruleForm" :size="formSize" status-icon
                ref="sixForm" :label-position="labelPosition">
                <section style="width: 100%;">
                    <el-row :gutter="10" style="width: 100%;">
                        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                            <h4 class="align-start">Reporte de datos por parte de la Entidad Administradora de Planes de
                                Beneficios</h4>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="column-custom">
                            <label class="label-field" style="min-width:180px">Fecha de reporte </label>
                            <el-date-picker v-model="ruleFormHbDatosGestante.fechaIngreso" type="date"
                                placeholder="Fecha de reporte" :format="dateFormat" :size="size" />
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                            <el-form-item label="Nombre de EAPB que reporta la información">
                                <el-input />
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                            <el-form-item label="Nombre de quien remite la información">
                                <el-input />
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                            <el-form-item label="Cargo de quien remite la información">
                                <el-input />
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                            <el-form-item label="Teléfono móvil">
                                <el-input />
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                            <el-form-item label="Teléfono fijo - indicativo">
                                <el-input />
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                            <el-form-item label="Correo eléctronico">
                                <el-input />
                            </el-form-item>
                        </el-col>
                    </el-row>
                </section>
            </el-form>
        </el-tab-pane>
    </el-tabs>
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
import { RuleFormHbDatosGestante, DiagnosticoFormHb, TratamientoFormHb } from '@/interfaces/modeloHb'

type FormInstance = InstanceType<typeof ElForm>

@Options({
    components: {},
})

export default class HepatitisBView extends Vue {

    activeName = 'first'
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

    handleClick(tab: TabsPaneContext, event: Event) {
        console.log(tab, event)
    }

    onResize(): void {
        // Handle screen resize logic here
        // You can access the window size using `window.innerWidth` and `window.innerHeight`
        //console.log('tamaño window', window.innerWidth)
        if (window.innerWidth <= 991) {
            this.position = 'top';
            this.labelPosition = ref<FormProps['labelPosition']>('top')
        } else {
            this.position = 'right';
            this.labelPosition = ref<FormProps['labelPosition']>('right')
            //this.labelPosition = ref<FormProps['labelPosition']>(this.position)
        }
    }

    mounted(): void {
        window.addEventListener('resize', this.onResize);
        if (window.innerWidth <= 991) {
            this.position = 'top';
            this.labelPosition = ref<FormProps['labelPosition']>('top')
        } else {
            this.position = 'right';
            this.labelPosition = ref<FormProps['labelPosition']>('right')
            //this.labelPosition = ref<FormProps['labelPosition']>(this.position)
        }
    }

    checkAll = false
    indeterminate = false
    value = ref<CheckboxValueType[]>([])



    medicamentos = [
        {
            value: '1',
            label: 'Zidovudina x 4 semanas 28 días',
        },
        {
            value: '2',
            label: 'Zidovudina x 6 semanas 42 días',
        },
        {
            value: '3',
            label: 'Lamivudina x 6 semanas 42 días',
        },
        {
            value: '4',
            label: 'Nevirapina x 4 semanas 28 días',
        },
        {
            value: '5',
            label: 'Raltegravir x 6 semanas 42 días',
        }
    ]

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

    ruleFormHbTratamiento = reactive<TratamientoFormHb>({
        tratadaAntesDelEmbarazo: false,
        requiereTratamiento1: false,
        semanaEnQueRecibioTratamiento1: 0,
        requiereTratamiento2: false,
        semanaEnQueRecibioTratamiento2: 0,
        nombreMedicamentoSuministrado: '',
        situacionGestante: []
    })


    rulesHbDatosGestante = reactive<FormRules<RuleFormHbDatosGestante>>({
        fechaIngreso: [
            {
                required: true,
                message: 'Por favor seleccione una fecha',
                trigger: 'blur',
            }
        ],
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
        ctrlPrenatalEnEmbarazo: [
            {
                required: true,
                message: 'Este campo es requerido',
                trigger: 'change',
            }
        ],
        edadGestacionalEnPrimerCtrlenSemanas: [
            { required: true, message: 'Por favor indique la semana gestacional', trigger: 'blur' }
        ],
        fechaProbableParto: [
            {
                required: true,
                message: 'Por favor seleccione una fecha',
                trigger: 'blur',
            }
        ]
    })

    rulesDiagnosticoHb = reactive<FormRules<DiagnosticoFormHb>>({
        MomentoDiagnostico: [
            {
                required: true,
                message: 'Por favor seleccione el momento del diagnostico',
                trigger: 'change',
            },
        ],
        EdadGestancionalEnSemanas: [
            { required: true, message: 'Por favor digite las semanas', trigger: 'blur' }
        ],
        FechaAntigenoSuperficieHb: [
            {
                required: true,
                message: 'Por favor seleccione una fecha',
                trigger: 'blur',
            }
        ],
        ResultadosAnticuerpo1: [
            {
                required: true,
                message: 'Este campo es requerido',
                trigger: 'change',
            }
        ],
        FechaResultadosAnticuerpo1: [
            {
                required: true,
                message: 'Por favor seleccione una fecha',
                trigger: 'blur',
            }
        ],
        ResultadosAnticuerpo2: [
            {
                required: true,
                message: 'Este campo es requerido',
                trigger: 'change',
            }
        ],
        FechaResultadosAnticuerpo2: [
            {
                required: true,
                message: 'Por favor seleccione una fecha',
                trigger: 'blur',
            }
        ],
        ResultadosAnticuerpo3: [
            {
                required: true,
                message: 'Este campo es requerido',
                trigger: 'change',
            }
        ],
        FechaResultadosAnticuerpo3: [
            {
                required: true,
                message: 'Por favor seleccione una fecha',
                trigger: 'blur',
            }
        ],
        ResultadoCargaViralMl: [
            { required: true, message: 'Por favor ingrese el resultado', trigger: 'blur' }
        ],
        fechaResultadoCargaViralMl: [
            {
                required: true,
                message: 'Por favor seleccione una fecha',
                trigger: 'blur',
            }
        ]
    })

    ruleSFormHbTratamiento = reactive<FormRules<TratamientoFormHb>>({
        tratadaAntesDelEmbarazo: [
            {
                required: true,
                message: 'Este campo es requerido',
                trigger: 'change',
            }
        ],
        requiereTratamiento1: [
            {
                required: true,
                message: 'Este campo es requerido',
                trigger: 'change',
            }
        ],
        semanaEnQueRecibioTratamiento1: [
            { required: true, message: 'Por favor digite la semana', trigger: 'blur' }
        ],
        requiereTratamiento2: [
            {
                required: true,
                message: 'Este campo es requerido',
                trigger: 'change',
            }
        ],
        semanaEnQueRecibioTratamiento2: [
            { required: true, message: 'Por favor digite la semana', trigger: 'blur' }
        ],
        nombreMedicamentoSuministrado: [
            { required: true, message: 'Por favor ingrese el nombre del medicamento', trigger: 'blur' }
        ],
        situacionGestante: [
            {
                required: true,
                message: 'Por favor seleccione una opción',
                trigger: 'change',
            }
        ]
    })
}
</script>

<style>
h4,
h5 {
    text-align: left
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
        width:100% !important;
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
    
    .el-form-item{
        flex-flow: column;  
        width: 100%;
    }

    .el-form-item label{
        width: 100% !important;
        text-align: left !important;
    }
}

.el-date-editor {
    width: 100% !important;
    margin-bottom: 18px
}

</style>