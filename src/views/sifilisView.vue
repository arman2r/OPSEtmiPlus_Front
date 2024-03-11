<template class="steps-container">
    <div class="full-width">
        <h4 class="steps-container">SEGUIMIENTO CLÍNICO DE LA GESTANTE CON SÍFILIS Y SU HIJA O HIJO EXPUESTO:ETMI-PLUS
        </h4>
        <section style="width:100%">
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                <el-tab-pane label="Diagnostico materno" name="second" ref="elTab2">
                    <el-form style="width: 100%;" label-width="180px" :size="formSize" status-icon ref="secondForm"
                        label-position="top" :model="ruleFormDiagnosticoMaterno" :rules="rulesFormDiagnosticoMaterno">
                        <section style="width: 100%;">
                            <el-row :gutter="10" style="width: 100%;">
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item
                                        label="Momento del diagnóstico de sífilis con relación a la gestación actual"
                                        prop="momentoDiagnostico" class="select-width">
                                        <el-select v-model="ruleFormDiagnosticoMaterno.momentoDiagnostico"
                                            placeholder="Momento del diagnóstico de sífilis con relación a la gestación actual">
                                            <el-option v-for="(mmd, index) in momentoDiagnosticoList" :key="index"
                                                :label="mmd.valor" :value="mmd.id" />
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Edad gestacional al diagnóstico en semanas (Durante):"
                                        prop="edadGestacionalDuranteSemanas">
                                        <el-input v-model="ruleFormDiagnosticoMaterno.edadGestacionalDuranteSemanas"
                                            type="number" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <h4>CONTROL PRENATAL:</h4>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item
                                        label="A la gestante se le realizó control prenatal durante este embarazo:"
                                        prop="seRealizoControlPrenatalDuranteEmbarazo">
                                        <el-radio-group class="ml-4"
                                            v-model="ruleFormDiagnosticoMaterno.seRealizoControlPrenatalDuranteEmbarazo">
                                            <el-radio label="1">SI</el-radio>
                                            <el-radio label="0">NO</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Edad gestacional al primer control prenatal, en semanas:">
                                        <el-input type="number" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Se realizó prueba treponémica:"
                                        prop="seRealizoPruebaTreponemica">
                                        <el-radio-group v-model="ruleFormDiagnosticoMaterno.seRealizoPruebaTreponemica">
                                            <el-radio :label="1">SI</el-radio>
                                            <el-radio :label="0">NO</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Tipo de prueba treponémica" prop="pruebaTreponemica"
                                        class="select-width">
                                        <el-select v-model="ruleFormDiagnosticoMaterno.pruebaTreponemica"
                                            placeholder="Tipo de prueba treponémica">
                                            <el-option v-for="(tpt, index) in tipoPruebaTreponemicaList" :key="index"
                                                :label="tpt.valor" :value="tpt.id" />
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="column-custom">
                                    <el-form-item label="Resultado de la prueba:" prop="resultadoPruebaTreponemica"
                                        class="select-width">
                                        <el-radio-group v-model="ruleFormDiagnosticoMaterno.resultadoPruebaTreponemica">
                                            <el-radio :label="1">Positivo</el-radio>
                                            <el-radio :label="0">Negativo</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="column-custom">
                                    <el-form-item label="Fecha del resultado:" prop="fechaResultadoPruebaTreponemica"
                                        class="select-width">
                                        <el-date-picker
                                            v-model="ruleFormDiagnosticoMaterno.fechaResultadoPruebaTreponemica"
                                            type="date" placeholder="Fecha del resultado" :format="dateFormat" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item
                                        label="Edad gestacional en semanas a la realización de la prueba treponémica:"
                                        prop="edadGestacionalALaRealizacionPruebaTreponemicaSemanas">
                                        <el-input
                                            v-model="ruleFormDiagnosticoMaterno.edadGestacionalALaRealizacionPruebaTreponemicaSemanas"
                                            type="number" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Se realizó prueba no tréponémica"
                                        prop="seRealizoPruebaNoTreponemica">
                                        <el-radio-group class="ml-4"
                                            v-model="ruleFormDiagnosticoMaterno.seRealizoPruebaNoTreponemica">
                                            <el-radio label="1">SI</el-radio>
                                            <el-radio label="0">NO</el-radio>
                                        </el-radio-group>
                                    </el-form-item>

                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Tipo de prueba no tréponémica" prop="pruebaNoTreponemica">
                                        <el-radio-group class="ml-4"
                                            v-model="ruleFormDiagnosticoMaterno.pruebaNoTreponemica">
                                            <el-radio v-for="(tpnt, index) in tipoPruebaNoTreponemicaList" :key="index"
                                                :label="tpnt.id">{{ tpnt.valor }}</el-radio>
                                        </el-radio-group>
                                    </el-form-item>

                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="column-custom">
                                    <el-form-item label="Resultado de la prueba:" prop="resultadoPruebaNoTreponemica">
                                        <el-radio-group
                                            v-model="ruleFormDiagnosticoMaterno.resultadoPruebaNoTreponemica">
                                            <el-radio :label="1">Reactiva</el-radio>
                                            <el-radio :label="0">No reactiva</el-radio>
                                        </el-radio-group>
                                    </el-form-item>

                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="column-custom">
                                    <el-form-item label="Fecha del resultado" prop="fechaResultadoPruebaNoTreponemica">
                                        <el-date-picker
                                            v-model="ruleFormDiagnosticoMaterno.fechaResultadoPruebaNoTreponemica"
                                            type="date" placeholder="Fecha del resultado" :format="dateFormat" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item
                                        label="Edad gestacional en semanas a la realización de la prueba no treponémica:"
                                        prop="nombreAseguradora">
                                        <el-input type="number" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"
                                    v-if="reporteDilucionesList.length !== 0">
                                    <el-form-item label="Reporte en diluciones si la prueba no tréponemica es reactiva"
                                        prop="listReporteDilucionesPruebaNoTreponemicaReactiva" class="select-width">
                                        <el-checkbox-group
                                            v-model="ruleFormDiagnosticoMaterno.listReporteDilucionesPruebaNoTreponemicaReactiva">
                                            <el-checkbox v-for="(rds, index) in reporteDilucionesList" :key="index"
                                                :value="rds.valor" :label="rds.id" />
                                        </el-checkbox-group>
                                    </el-form-item>
                                </el-col>

                            </el-row>
                            <el-row class="row-bg" justify="end">
                                <div class="btn-save">
                                    <el-button type="primary" size="default"
                                        @click="submitForm(secondForm, 'three')">guardar y
                                        continuar</el-button>
                                </div>
                            </el-row>

                        </section>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="Tratamiento Materno" name="third" ref="elTab3">
                    <el-form style="width: 100%;" label-width="180px" :size="formSize" status-icon ref="secondForm"
                        label-position="top" :model="ruleFormEstadioClinico" :rules="rulesFormEstadioClinico">
                        <section style="width: 100%;">
                            <el-row :gutter="10" style="width: 100%;">
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Clasificación estado clínico de la sífilis:"
                                        prop="clasificacionEstadioClinico" class="select-width">
                                        <el-select v-model="ruleFormEstadioClinico.clasificacionEstadioClinico"
                                            placeholder="Clasificación">
                                            <el-option v-for="(cn, index) in clasificacionEstadioClinicoList"
                                                :key="index" :label="cn.valor" :value="cn.id" />
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="column-custom">
                                    <el-form-item label="Aplicación de penicilina benzatinica:"
                                        prop="aplicaronPenicilinaBenzatinica">
                                        <el-radio-group v-model="ruleFormEstadioClinico.aplicaronPenicilinaBenzatinica">
                                            <el-radio :label="1">Si</el-radio>
                                            <el-radio :label="0">No</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col class="mb mt" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <div v-for="(ttom, index) in ttoMaternoList" :key="index"
                                        class="w-100 no-margin el-row">

                                        <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">

                                            <el-form-item label="Número de dosis" prop="dosisPenicilinaBenzatinica"
                                                class="select-width">
                                                <el-select v-model="ttom.dosisPenicilinaBenzatinica"
                                                    placeholder="Número de dosis" @change="validateField(index)">
                                                    <el-option v-for="(dttom, index) in dosisPenicilinaBenzList"
                                                        :key="index" :label="dttom.valor" :value="dttom.id" />
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" class="column-custom">
                                            <!--<el-form-item label="Fecha" prop="fechaExamenMl1">
<el-input v-model="ruleFormPrimerReporte.fechaExamenMl1" />
</el-form-item>-->
                                            <el-form-item label="Fecha" prop="fechaAplicacionPenicilinaBenzatinica"
                                                class="w-100">
                                                <el-date-picker v-model="ttom.fechaAplicacionPenicilinaBenzatinica"
                                                    @change="validateField(index)" type="date" placeholder="Fecha"
                                                    :format="dateFormat" :size="size" />
                                            </el-form-item>
                                        </el-col>
                                        <el-col :xs="24" :sm="24" :md="index >= 1 ? 7 : 8" :lg="index >= 1 ? 7 : 8"
                                            :xl="index >= 1 ? 7 : 8">
                                            <el-form-item label="Edad gestacional a la aplicación en semanas:"
                                                prop="edadGestionalAplicacionPenicilinaBenzatinicaSemanas">
                                                <el-input
                                                    v-model="ttom.edadGestionalAplicacionPenicilinaBenzatinicaSemanas"
                                                    type="number" @input="validateField(index)" />
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="1" :lg="1" :xl="1" class="center-button">
                                            <el-button v-if="ttoMaternoList.length >= 2 && index !== 0"
                                                :icon="DeleteIcon" @click="removeFields(index)" type="danger"
                                                circle></el-button>
                                        </el-col>
                                    </div>
                                    <el-col :span="24">
                                        <el-button type="primary" size="default" :disabled="validarTtoMaternoList"
                                            @click="addFields">
                                            Agregar dosis
                                        </el-button>
                                    </el-col>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item prop="resultadoManejoSifilisGestacional" label="El Tratamiento para el manejo de la sífilis gestacional
                                        fue:">
                                        <el-radio-group class="ml-4"
                                            v-model="rulesFormEstadioClinico.resultadoManejoSifilisGestacional">
                                            <el-radio :label="1">Adecuado</el-radio>
                                            <el-radio :label="2">Inadecuado</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item prop="seRealizoDesensibilizacionAplicacionPenicilinaBenzatinica"
                                        label="Se realizó desensibilización para la aplicación de la
                                        penicilina benzatínica:">
                                        <el-radio-group class="ml-4"
                                            v-model="rulesFormEstadioClinico.seRealizoDesensibilizacionAplicacionPenicilinaBenzatinica">
                                            <el-radio :label="1">SI</el-radio>
                                            <el-radio :label="0">NO</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item prop="resultadoPrevenirSifilisCongenita" label="El tratamiento para prevenir la sífilis congénita
                                        fue:">
                                        <el-radio-group class="ml-4"
                                            v-model="rulesFormEstadioClinico.resultadoPrevenirSifilisCongenita">
                                            <el-radio :label="1">Adecuado</el-radio>
                                            <el-radio :label="2">Inadecuado</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </section>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="Seguimiento serológico" name="four" ref="elTab4">
                    <el-form style="width: 100%;" label-width="180px" :size="formSize" status-icon ref="secondForm"
                        label-position="top">
                        <section style="width: 100%;">
                            <el-row :gutter="10" style="width: 100%;">
                                <el-col :span="24">
                                    <h4>SEGUIMIENTO SEROLÓGICO A LA GESTANTE - PRUEBA NO TREPONÉMICA</h4>
                                </el-col>
                                <el-col :span="24">
                                    <h5>Pruebas no tréponemicas de seguimiento realizadas durante
                                        la: gestación:</h5><br />
                                </el-col>
                                <br />
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <el-col class="mb mt" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                        <div v-for="(ssco, index) in seguimientoSerologicoList" :key="index"
                                            class="w-100 no-margin el-row">

                                            <el-col :xs="24" :sm="24" :md="12" :lg="5" :xl="5">

                                                <el-form-item label="Prueba utilizada"
                                                    prop="tipoPruebaNoTreponemicaDuranteGestacion" class="select-width">
                                                    <el-radio-group
                                                        v-model="ssco.tipoPruebaNoTreponemicaDuranteGestacion"
                                                        @change="validateFieldSegSerologico(index)">
                                                        <el-radio :label="1">VDRL</el-radio>
                                                        <el-radio :label="2">RPR</el-radio>
                                                    </el-radio-group>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6" class="column-custom">
                                                <!--<el-form-item label="Fecha" prop="fechaExamenMl1">
<el-input v-model="ruleFormPrimerReporte.fechaExamenMl1" />
</el-form-item>-->
                                                <el-form-item label="Fecha" prop="fechaResultadoPruebaNoTreponemica"
                                                    class="w-100">
                                                    <el-date-picker v-model="ssco.fechaResultadoPruebaNoTreponemica"
                                                        @change="validateFieldSegSerologico(index)" type="date"
                                                        placeholder="Fecha" :format="dateFormat" :size="size" />
                                                </el-form-item>
                                            </el-col>
                                            <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6" class="column-custom">
                                                <el-form-item label="Resultado: reporte en diluciones"
                                                    prop="dilucionesPruebaNoTreponemicaEsReactiva">
                                                    <el-select v-model="ssco.dilucionesPruebaNoTreponemicaEsReactiva"
                                                        multiple placeholder="Select" style="width: 240px"
                                                        @change="validateFieldSegSerologico(index)">
                                                        <el-option v-for="(rteds, index) in reporteDilucionesList"
                                                            :key="index" :label="rteds.id" :value="rteds.valor" />
                                                    </el-select>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :xs="24" :sm="24" :md="index >= 1 ? 11 : 6" :lg="index >= 1 ? 6 : 6"
                                                :xl="index >= 1 ? 6 : 6" class="column-custom">
                                                <el-form-item label="Edad gest. En semanas a la realización:"
                                                    prop="edadGestacionalRealizacionPruebaNoTreponemica">
                                                    <el-input type="number"
                                                        v-model="ssco.edadGestacionalRealizacionPruebaNoTreponemica"
                                                        @change="validateFieldSegSerologico(index)" />
                                                </el-form-item>
                                            </el-col>
                                            <el-col :md="1" :lg="1" :xl="1" class="center-button">
                                                <el-button v-if="seguimientoSerologicoList.length >= 2 && index !== 0"
                                                    :icon="DeleteIcon" @click="removeFieldSegSerologico(index)"
                                                    type="danger" circle></el-button>
                                            </el-col>
                                        </div>
                                        <el-col :span="24">
                                            <el-button type="primary" size="default"
                                                :disabled="validarStoSerologicoMaternoList"
                                                @click="addFieldsSegSerologico">
                                                Agregar prueba
                                            </el-button>
                                        </el-col>
                                    </el-col>
                                    <!--<el-row :gutter="8">
                                        <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                                <h5 class="serologia-retratamiento">Prueba <br> utilizada</h5>
                                            </el-col>
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                                <el-form-item prop="tipoDocumento" class="select-width">
                                                    <el-select v-model="ruleFormHbDatosGestante.tipoDocumento"
                                                        placeholder="Número de dosis">
                                                        <el-option label="VDRL" value="1" />
                                                        <el-option label="RPR" value="2" />
                                                    </el-select>
                                                </el-form-item>
                                                <el-form-item prop="tipoDocumento" class="select-width">
                                                    <el-select v-model="ruleFormHbDatosGestante.tipoDocumento"
                                                        placeholder="Número de dosis">
                                                        <el-option label="VDRL" value="1" />
                                                        <el-option label="RPR" value="2" />
                                                    </el-select>
                                                </el-form-item>
                                                <el-form-item prop="tipoDocumento" class="select-width">
                                                    <el-select v-model="ruleFormHbDatosGestante.tipoDocumento"
                                                        placeholder="Número de dosis">
                                                        <el-option label="VDRL" value="1" />
                                                        <el-option label="RPR" value="2" />
                                                    </el-select>
                                                </el-form-item>
                                            </el-col>
                                        </el-col>
                                        <el-col :xs="24" :sm="24" :md="4" :lg="6" :xl="6">
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                                <h5 class="serologia-retratamiento">Fecha: <br> Día/Mes/Año</h5>
                                            </el-col>
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                                <el-date-picker
                                                    v-model="ruleFormHbDiagnosticoHb.fechaResultadoCargaViralMl"
                                                    type="date" placeholder="Fecha de emisión" :format="dateFormat" />
                                                <el-date-picker
                                                    v-model="ruleFormHbDiagnosticoHb.fechaResultadoCargaViralMl"
                                                    type="date" placeholder="Fecha de emisión" :format="dateFormat" />
                                                <el-date-picker
                                                    v-model="ruleFormHbDiagnosticoHb.fechaResultadoCargaViralMl"
                                                    type="date" placeholder="Fecha de emisión" :format="dateFormat" />
                                            </el-col>
                                        </el-col>
                                        <el-col :xs="24" :sm="24" :md="4" :lg="6" :xl="6">
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                                <h5 class="serologia-retratamiento">Resultado: <br> reporte en
                                                    diluciones
                                                </h5>
                                            </el-col>
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                                <el-input style="margin-bottom: 18px;"
                                                    v-model="ruleFormDatosGestante.direccionResidencia" />
                                                <el-input style="margin-bottom: 18px;"
                                                    v-model="ruleFormDatosGestante.direccionResidencia" />
                                                <el-input style="margin-bottom: 18px;"
                                                    v-model="ruleFormDatosGestante.direccionResidencia" />
                                            </el-col>
                                        </el-col>
                                        <el-col :xs="24" :sm="24" :md="4" :lg="6" :xl="6">
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                                <h5 class="serologia-retratamiento">Edad gestacional en semanas a la
                                                    realización</h5>
                                            </el-col>
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                                <el-input style="margin-bottom: 18px;"
                                                    v-model="ruleFormDatosGestante.nombreAseguradora" type="number" />
                                                <el-input style="margin-bottom: 18px;"
                                                    v-model="ruleFormDatosGestante.nombreAseguradora" type="number" />
                                                <el-input style="margin-bottom: 18px;"
                                                    v-model="ruleFormDatosGestante.nombreAseguradora" type="number" />
                                            </el-col>
                                        </el-col>
                                    </el-row>-->
                                </el-col>
                            </el-row>
                        </section>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="Retratamiento Materno" name="five" ref="elTab5">
                    <el-form style="width: 100%;" label-width="180px" :size="formSize" status-icon ref="secondForm"
                        label-position="top" :model="ruleFormRetMaterno" :rules="rulesFormRetMaterno">
                        <section style="width: 100%;">
                            <el-row :gutter="10" style="width: 100%;">
                                <el-col :span="24">
                                    <h4>RETRATAMIENTO MATERNO PARA LA SÍFILIS GESTACIONAL</h4>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Requirió retratamiento:" prop="requirioTratamiento">
                                        <el-radio-group v-model="ruleFormRetMaterno.requirioTratamiento">
                                            <el-radio :label="1">SI</el-radio>
                                            <el-radio :label="0">NO</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>

                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Causa del retratamiento:" prop="causaRetratamiento">
                                        <el-radio-group class="ml-4" v-model="ruleFormRetMaterno.causaRetratamiento">
                                            <el-radio v-for="(rtmtno, index) in retratamientoMaternoList" :key="index"
                                                :label="rtmtno.id">{{ rtmtno.valor }}</el-radio> 
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>

                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Aplicación de penicilina benzatínica:"
                                        prop="aplicaronPenicilinaBenzatinica">
                                        <el-radio-group class="ml-4"
                                            v-model="ruleFormRetMaterno.aplicaronPenicilinaBenzatinica">
                                            <el-radio :label="1">SI</el-radio>
                                            <el-radio :label="0">NO</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>

                                <el-col class="mb" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <el-row :gutter="8">
                                        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                                <h5 class="serologia-retratamiento">Número <br> de dosis</h5>
                                            </el-col>
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                                <el-form-item prop="tipoDocumento" class="select-width">
                                                    <el-select v-model="ruleFormHbDatosGestante.tipoDocumento"
                                                        placeholder="Número de dosis">
                                                        <el-option label="Primera dosis" value="1" />
                                                        <el-option label="Sgunda dosis" value="2" />
                                                        <el-option label="Tercera dosis" value="3" />
                                                    </el-select>
                                                </el-form-item>
                                                <el-form-item prop="tipoDocumento" class="select-width">
                                                    <el-select v-model="ruleFormHbDatosGestante.tipoDocumento"
                                                        placeholder="Número de dosis">
                                                        <el-option label="Primera dosis" value="1" />
                                                        <el-option label="Sgunda dosis" value="2" />
                                                        <el-option label="Tercera dosis" value="3" />
                                                    </el-select>
                                                </el-form-item>
                                                <el-form-item prop="tipoDocumento" class="select-width">
                                                    <el-select v-model="ruleFormHbDatosGestante.tipoDocumento"
                                                        placeholder="Número de dosis">
                                                        <el-option label="Primera dosis" value="1" />
                                                        <el-option label="Sgunda dosis" value="2" />
                                                        <el-option label="Tercera dosis" value="3" />
                                                    </el-select>
                                                </el-form-item>
                                            </el-col>
                                        </el-col>
                                        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                                <h5 class="serologia-retratamiento">Fecha: <br> Día/Mes/Año</h5>
                                            </el-col>
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                                <el-input style="margin-bottom: 18px;"
                                                    v-model="ruleFormDatosGestante.nombreAseguradora" type="date" />
                                                <el-input style="margin-bottom: 18px;"
                                                    v-model="ruleFormDatosGestante.nombreAseguradora" type="date" />
                                                <el-input style="margin-bottom: 18px;"
                                                    v-model="ruleFormDatosGestante.nombreAseguradora" type="date" />
                                            </el-col>
                                        </el-col>
                                        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                                <h5 class="serologia-retratamiento">Edad gestacional a la <br>aplicación
                                                    en
                                                    semanas</h5>
                                            </el-col>
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                                <el-date-picker
                                                    v-model="ruleFormHbDiagnosticoHb.fechaResultadoCargaViralMl"
                                                    type="date" placeholder="Fecha de emisión" :format="dateFormat" />
                                                <el-date-picker
                                                    v-model="ruleFormHbDiagnosticoHb.fechaResultadoCargaViralMl"
                                                    type="date" placeholder="Fecha de emisión" :format="dateFormat" />
                                                <el-date-picker
                                                    v-model="ruleFormHbDiagnosticoHb.fechaResultadoCargaViralMl"
                                                    type="date" placeholder="Fecha de emisión" :format="dateFormat" />
                                            </el-col>
                                        </el-col>
                                    </el-row>
                                </el-col>
                            </el-row>
                        </section>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="Seguimiento" name="six" ref="elTab6">
                    <el-form style="width: 100%;" label-width="180px" :size="formSize" status-icon ref="secondForm"
                        label-position="top">
                        <section style="width: 100%;">
                            <el-row :gutter="10" style="width: 100%;">
                                <el-col :span="24">
                                    <h4>SEGUIMIENTO A SUS CONTACTOS SEXUALES</h4>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Se realizó notificacion a los contactos:">
                                        <el-radio-group class="ml-4">
                                            <el-radio :label="1">SI</el-radio>
                                            <el-radio :label="0">NO</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Se realizó tratamiento a contactos:">
                                        <el-radio-group class="ml-4">
                                            <el-radio :label="1">SI</el-radio>
                                            <el-radio :label="0">NO</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Se aplicó penicilina benzatínica:">
                                        <el-radio-group class="ml-4">
                                            <el-radio :label="1">SI</el-radio>
                                            <el-radio :label="0">NO</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col class="mb" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <el-row :gutter="8">
                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                                <h5 class="serologia-retratamiento">Número <br> de dosis</h5>
                                            </el-col>
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                                <el-form-item prop="tipoDocumento" class="select-width">
                                                    <el-select v-model="ruleFormHbDatosGestante.tipoDocumento"
                                                        placeholder="Número de dosis">
                                                        <el-option label="Primera dosis" value="1" />
                                                        <el-option label="Sgunda dosis" value="2" />
                                                        <el-option label="Tercera dosis" value="3" />
                                                    </el-select>
                                                </el-form-item>
                                                <el-form-item prop="tipoDocumento" class="select-width">
                                                    <el-select v-model="ruleFormHbDatosGestante.tipoDocumento"
                                                        placeholder="Número de dosis">
                                                        <el-option label="Primera dosis" value="1" />
                                                        <el-option label="Sgunda dosis" value="2" />
                                                        <el-option label="Tercera dosis" value="3" />
                                                    </el-select>
                                                </el-form-item>
                                                <el-form-item prop="tipoDocumento" class="select-width">
                                                    <el-select v-model="ruleFormHbDatosGestante.tipoDocumento"
                                                        placeholder="Número de dosis">
                                                        <el-option label="Primera dosis" value="1" />
                                                        <el-option label="Sgunda dosis" value="2" />
                                                        <el-option label="Tercera dosis" value="3" />
                                                    </el-select>
                                                </el-form-item>
                                            </el-col>
                                        </el-col>
                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                                <h5 class="serologia-retratamiento">Fecha: <br> Día/Mes/Año</h5>
                                            </el-col>
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                                <el-input style="margin-bottom: 18px;"
                                                    v-model="ruleFormDatosGestante.nombreAseguradora" type="date" />
                                                <el-input style="margin-bottom: 18px;"
                                                    v-model="ruleFormDatosGestante.nombreAseguradora" type="date" />
                                                <el-input style="margin-bottom: 18px;"
                                                    v-model="ruleFormDatosGestante.nombreAseguradora" type="date" />
                                            </el-col>
                                        </el-col>
                                    </el-row>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <el-form-item
                                        label="Si no se utilizó penicilina benzatínica, escriba el nombre del medicamento utilizado">
                                        <el-input type="text" v-model="ruleFormDatosGestante.nombreAseguradora" />
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </section>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="Situación" name="seven" ref="elTab7">
                    <el-form style="width: 100%;" label-width="180px" :size="formSize" status-icon ref="secondForm"
                        label-position="top">
                        <section style="width: 100%;">
                            <el-row :gutter="10" style="width: 100%;">
                                <el-col :span="24">
                                    <h4>SITUACIÓN DE LA GESTANTE CON EL EMBARAZO ACTUAL</h4>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Tipo de situación" prop="areaOcurrencia" class="select-width">
                                        <el-select placeholder="Tipo de situación">
                                            <el-option label="Aborto" value="1" />
                                            <el-option label="IVE" value="2" />
                                            <el-option label="Mortalidad Materna" value="3" />
                                            <el-option label="Parto" value="3" />
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="column-custom">
                                    <el-form-item label="Fecha del parto">
                                        <el-date-picker v-model="ruleFormHbDatosGestante.fechaIngreso" type="date"
                                            placeholder="Fecha del parto" :format="dateFormat" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="column-custom mb mt">
                                    <el-form-item label="Condición del recién nacido:">
                                        <el-radio-group class="ml-4">
                                            <el-radio :label="1">Vivo</el-radio>
                                            <el-radio :label="2">Mortinato</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="column-custom mb mt">
                                    <el-form-item label="Número de productos al nacimiento:">
                                        <el-radio-group class="ml-4">
                                            <el-radio :label="1">Único</el-radio>
                                            <el-radio :label="2">Múltiple</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Edad gestacional al nacimiento en semanas:"
                                        prop="nombreAseguradora">
                                        <el-input v-model="ruleFormDatosGestante.nombreAseguradora" type="number" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Peso en gramos:" prop="nombreAseguradora">
                                        <el-input v-model="ruleFormDatosGestante.nombreAseguradora" type="number" />
                                    </el-form-item>
                                </el-col>
                                <br />
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Sexo:" prop="sexo" class="select-width">
                                        <el-select v-model="ruleFormTercerReporte.sexo" placeholder="Sexo">
                                            <el-option label="Hombre" value="1" />
                                            <el-option label="Mujer" value="2" />
                                            <el-option label="Intersexual" value="3" />
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Tipo de regimen de salud" prop="tipoRegimenSalud"
                                        class="select-width">
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
                            </el-row>
                        </section>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="Diagnostico" name="eigth" ref="elTab8">
                    <el-form style="width: 100%;" label-width="180px" :size="formSize" status-icon ref="secondForm"
                        label-position="top">
                        <section style="width: 100%;">
                            <el-row :gutter="10" style="width: 100%;">
                                <el-col :span="24">
                                    <h4>DIAGNÓSTICO DEL RECIEN NACIDO EXPUESTO A LA SÍFILIS</h4>
                                </el-col>
                                <el-col :span="24">
                                    <h5>REALIZACIÓN DE PRUEBA NO TREPONÉMICA DE LA MADRE AL MOMENTO DEL PARTO:</h5>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Se realizó prueba no treponémica:">
                                        <el-radio-group class="ml-4">
                                            <el-radio :label="1">SI</el-radio>
                                            <el-radio :label="0">NO</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Tipo de prueba no treponémica:">
                                        <el-radio-group class="ml-4">
                                            <el-radio :label="1">VDRL</el-radio>
                                            <el-radio :label="2">RPR</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <el-form-item label="Resultado de la prueba:">
                                        <el-radio-group class="ml-4">
                                            <el-radio :label="1">Reactiva</el-radio>
                                            <el-radio :label="2">No reactiva</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Fecha del resultado:">
                                        <el-date-picker v-model="ruleFormHbDatosGestante.fechaIngreso" type="date"
                                            placeholder="Fecha del resultado" :format="dateFormat" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Reporte de diluciones si la prueba no treponémica es reactiva"
                                        prop="nacionalidad" class="select-width">
                                        <el-select v-model="ruleFormHbDatosGestante.nacionalidad">
                                            <el-option label="" value="1" />
                                            <el-option label="1" value="2" />
                                            <el-option label="2" value="3" />
                                            <el-option label="4" value="4" />
                                            <el-option label="8" value="5" />
                                            <el-option label="16" value="6" />
                                            <el-option label="32" value="7" />
                                            <el-option label="64" value="8" />
                                            <el-option label="128" value="9" />
                                            <el-option label="256" value="10" />
                                            <el-option label="512" value="11" />
                                            <el-option label="1024" value="12" />
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="24">
                                    <h5>REALIZACIÓN DE PRUEBA NO TREPONÉMICA A LA NIÑA O NIÑO EXPUESTO - AL NACIMIENTO:
                                    </h5>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="column-custom mb mt">
                                    <el-form-item label="Se realizó prueba no treonémica:">
                                        <el-radio-group class="ml-4">
                                            <el-radio :label="1">SI</el-radio>
                                            <el-radio :label="0">NO</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="column-custom mb mt">
                                    <el-form-item label="Tipo de prueba no treponémica:">
                                        <el-radio-group class="ml-4">
                                            <el-radio :label="1">VDRL</el-radio>
                                            <el-radio :label="2">RPR</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="column-custom mb mt">
                                    <el-form-item label="Resultado de la prueba:">
                                        <el-radio-group class="ml-4">
                                            <el-radio :label="1">Reactiva</el-radio>
                                            <el-radio :label="2">No reactiva</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="column-custom">
                                    <el-form-item label="Fecha del resultado:">
                                        <el-date-picker v-model="ruleFormHbDatosGestante.fechaIngreso" type="date"
                                            placeholder="Fecha del resultado" :format="dateFormat" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Reporte de diluciones si la prueba no treponémica es reactiva"
                                        prop="nacionalidad" class="select-width">
                                        <el-select v-model="ruleFormHbDatosGestante.nacionalidad">
                                            <el-option label="" value="1" />
                                            <el-option label="1" value="2" />
                                            <el-option label="2" value="3" />
                                            <el-option label="4" value="4" />
                                            <el-option label="8" value="5" />
                                            <el-option label="16" value="6" />
                                            <el-option label="32" value="7" />
                                            <el-option label="64" value="8" />
                                            <el-option label="128" value="9" />
                                            <el-option label="256" value="10" />
                                            <el-option label="512" value="11" />
                                            <el-option label="1024" value="12" />
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </section>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="Intervenciones" name="nine" ref="elTab9">
                    <el-form style="width: 100%;" label-width="180px" :size="formSize" status-icon ref="secondForm"
                        label-position="top">
                        <section style="width: 100%;">
                            <el-row :gutter="10" style="width: 100%;">
                                <el-col :span="24">
                                    <h4>DIAGNÓSTICO E INTERVENCIONES DE LA NIÑA O NIÑO FRENTE A LA SÍFILIS</h4>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Niña o niño con diagnóstico descartado de sífilis - Sano:">
                                        <el-radio-group class="ml-4">
                                            <el-radio :label="1">SI</el-radio>
                                            <el-radio :label="0">NO</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item
                                        label="Niña o niño Sano, se aplico dosis profilactica con penicilina benzatinica:">
                                        <el-radio-group class="ml-4">
                                            <el-radio :label="1">SI</el-radio>
                                            <el-radio :label="0">NO</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Niña o niño con diagnóstico confirmado de sífilis:">
                                        <el-radio-group class="ml-4">
                                            <el-radio :label="1">SI</el-radio>
                                            <el-radio :label="0">NO</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item
                                        label="Niña o niño con diagnóstico de sífilis, se aplico tratamiento para sífilis:">
                                        <el-radio-group class="ml-4">
                                            <el-radio :label="1">SI</el-radio>
                                            <el-radio :label="0">NO</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Niña o niño recibió tratamiento con penicilina cristalina:">
                                        <el-radio-group class="ml-4">
                                            <el-radio :label="1">SI</el-radio>
                                            <el-radio :label="0">NO</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Niña o niño recibió tratamiento por 10 días:">
                                        <el-radio-group class="ml-4">
                                            <el-radio :label="1">SI</el-radio>
                                            <el-radio :label="0">NO</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="24">
                                    <h5>CRITERIO UTILIZADO PARA EL DIAGNÓSTICO DE SÍFILIS CONGÉNITA EN LA NIÑA O NIÑO
                                    </h5>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Criterio utilizado" prop="nacionalidad" class="select-width">
                                        <el-select v-model="ruleFormHbDatosGestante.nacionalidad">
                                            <el-option label="Nexo epidemiológico" value="1" />
                                            <el-option label="Criterio serológico" value="2" />
                                            <el-option label="Criterio clinico" value="3" />
                                            <el-option label="Diagnostico directo" value="4" />
                                            <el-option label="Diagnostico paraclínico" value="5" />
                                        </el-select>
                                    </el-form-item>
                                </el-col>

                            </el-row>
                        </section>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="Seguimiento niña o niño" name="ten" ref="elTab10">
                    <el-form style="width: 100%;" label-width="180px" :size="formSize" status-icon ref="secondForm"
                        label-position="top">
                        <section style="width: 100%;">
                            <el-row :gutter="10" style="width: 100%;">
                                <el-col :span="24">
                                    <h4>SEGUIMIENTO DE LA NIÑA O NIÑO CON SÍFILIS CONGENITA DURANTE EL PRIMER AÑO DE
                                        VIDA
                                    </h4>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="column-custom mt">
                                    <el-form-item
                                        label="Se realizó deguimiento al niño con sífilis a los: 3, 6 ,9 y 12 meses de edad:">
                                        <el-radio-group class="ml-4">
                                            <el-radio :label="1">SI</el-radio>
                                            <el-radio :label="0">NO</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="column-custom mb">
                                    <label class="title-field"
                                        style="min-width: 180px !important;width:inherit !important">Si
                                        la respues es SI
                                        registre la siguiente informacion:</label>
                                </el-col>
                                <el-col class="mb" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <el-row :gutter="8">
                                        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                                <h5 class="serologia-retratamiento">Prueba <br> utilizada</h5>
                                            </el-col>
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                                <el-form-item prop="tipoDocumento" class="select-width">
                                                    <el-select v-model="ruleFormHbDatosGestante.tipoDocumento"
                                                        placeholder="Tipo de prueba">
                                                        <el-option label="VDRL" value="1" />
                                                        <el-option label="RPR" value="2" />
                                                    </el-select>
                                                </el-form-item>
                                                <el-form-item prop="tipoDocumento" class="select-width">
                                                    <el-select v-model="ruleFormHbDatosGestante.tipoDocumento"
                                                        placeholder="Tipo de prueba">
                                                        <el-option label="VDRL" value="1" />
                                                        <el-option label="RPR" value="2" />
                                                    </el-select>
                                                </el-form-item>
                                                <el-form-item prop="tipoDocumento" class="select-width">
                                                    <el-select v-model="ruleFormHbDatosGestante.tipoDocumento"
                                                        placeholder="Tipo de prueba">
                                                        <el-option label="VDRL" value="1" />
                                                        <el-option label="RPR" value="2" />
                                                    </el-select>
                                                </el-form-item>
                                                <el-form-item prop="tipoDocumento" class="select-width">
                                                    <el-select v-model="ruleFormHbDatosGestante.tipoDocumento"
                                                        placeholder="Tipo de prueba">
                                                        <el-option label="VDRL" value="1" />
                                                        <el-option label="RPR" value="2" />
                                                    </el-select>
                                                </el-form-item>
                                            </el-col>
                                        </el-col>
                                        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                                <h5 class="serologia-retratamiento">Fecha: <br> Día/Mes/Año</h5>
                                            </el-col>
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                                <el-input style="margin-bottom: 18px;"
                                                    v-model="ruleFormDatosGestante.nombreAseguradora" type="date" />
                                                <el-input style="margin-bottom: 18px;"
                                                    v-model="ruleFormDatosGestante.nombreAseguradora" type="date" />
                                                <el-input style="margin-bottom: 18px;"
                                                    v-model="ruleFormDatosGestante.nombreAseguradora" type="date" />
                                                <el-input style="margin-bottom: 18px;"
                                                    v-model="ruleFormDatosGestante.nombreAseguradora" type="date" />
                                            </el-col>
                                        </el-col>
                                        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                                <h5 class="serologia-retratamiento">Reporte en diluciones: <br> elija la
                                                    opcion que corresponda</h5>
                                            </el-col>
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                                    <el-form-item prop="tipoDocumento" class="select-width">
                                                        <el-select v-model="ruleFormHbDatosGestante.tipoDocumento"
                                                            placeholder="Diluciones">
                                                            <el-option label="1" value="1" />
                                                            <el-option label="2" value="2" />
                                                            <el-option label="4" value="3" />
                                                            <el-option label="8" value="4" />
                                                            <el-option label="16" value="5" />
                                                            <el-option label="32" value="6" />
                                                            <el-option label="64" value="7" />
                                                            <el-option label="128" value="8" />
                                                            <el-option label="256" value="9" />
                                                            <el-option label="512" value="10" />
                                                            <el-option label="1024" value="11" />
                                                        </el-select>
                                                    </el-form-item>
                                                    <el-form-item prop="tipoDocumento" class="select-width">
                                                        <el-select v-model="ruleFormHbDatosGestante.tipoDocumento"
                                                            placeholder="Diluciones">
                                                            <el-option label="1" value="1" />
                                                            <el-option label="2" value="2" />
                                                            <el-option label="4" value="3" />
                                                            <el-option label="8" value="4" />
                                                            <el-option label="16" value="5" />
                                                            <el-option label="32" value="6" />
                                                            <el-option label="64" value="7" />
                                                            <el-option label="128" value="8" />
                                                            <el-option label="256" value="9" />
                                                            <el-option label="512" value="10" />
                                                            <el-option label="1024" value="11" />
                                                        </el-select>
                                                    </el-form-item>
                                                    <el-form-item prop="tipoDocumento" class="select-width">
                                                        <el-select v-model="ruleFormHbDatosGestante.tipoDocumento"
                                                            placeholder="Diluciones">
                                                            <el-option label="1" value="1" />
                                                            <el-option label="2" value="2" />
                                                            <el-option label="4" value="3" />
                                                            <el-option label="8" value="4" />
                                                            <el-option label="16" value="5" />
                                                            <el-option label="32" value="6" />
                                                            <el-option label="64" value="7" />
                                                            <el-option label="128" value="8" />
                                                            <el-option label="256" value="9" />
                                                            <el-option label="512" value="10" />
                                                            <el-option label="1024" value="11" />
                                                        </el-select>
                                                    </el-form-item>
                                                    <el-form-item prop="tipoDocumento" class="select-width">
                                                        <el-select v-model="ruleFormHbDatosGestante.tipoDocumento"
                                                            placeholder="Diluciones">
                                                            <el-option label="1" value="1" />
                                                            <el-option label="2" value="2" />
                                                            <el-option label="4" value="3" />
                                                            <el-option label="8" value="4" />
                                                            <el-option label="16" value="5" />
                                                            <el-option label="32" value="6" />
                                                            <el-option label="64" value="7" />
                                                            <el-option label="128" value="8" />
                                                            <el-option label="256" value="9" />
                                                            <el-option label="512" value="10" />
                                                            <el-option label="1024" value="11" />
                                                        </el-select>
                                                    </el-form-item>
                                                </el-col>
                                            </el-col>
                                        </el-col>
                                    </el-row>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="column-custom mb mt">
                                    <el-form-item label="La niña o niño cumple criterios de curación para sífilis:">
                                        <el-radio-group class="ml-4">
                                            <el-radio :label="1">SI</el-radio>
                                            <el-radio :label="0">NO</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </section>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="Reporte" name="eleven" ref="elTab11">
                    <el-form style="width: 100%;" label-width="180px" :size="formSize" status-icon ref="secondForm"
                        label-position="top">
                        <section style="width: 100%;">
                            <el-row :gutter="10" style="width: 100%;">
                                <el-col :span="24">
                                    <h4>REPORTE DE DATOS DEL SEGUIMIENTO AL BINOMIO MADRE-HIJO</h4>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Nombre de instituto que hace seguimiento:"
                                        prop="nombreIntitucionSeguimiento">
                                        <el-input v-model="ruleFormReporteSifilis.nombreIntitucionSeguimiento"
                                            placeholder="Instituto" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Nombre de quien registra la información:"
                                        prop="nombreQuienRegistraInformacion">
                                        <el-input v-model="ruleFormReporteSifilis.nombreQuienRegistraInformacion"
                                            placeholder="Quien registra la información" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Cargo de quien hace el seguimiento:"
                                        prop="cargoQuienHaceSeguimiento">
                                        <el-input v-model="ruleFormReporteSifilis.cargoQuienHaceSeguimiento"
                                            placeholder="Cargo" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Teléfono celular:" prop="telefonoCelular">
                                        <el-input v-model="ruleFormReporteSifilis.telefonoCelular"
                                            placeholder="Teléfono celular" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Teléfono fijo - indicativo" prop="telefonoFijo">
                                        <el-input v-model="ruleFormReporteSifilis.telefonoFijo"
                                            placeholder="Teléfono fijo" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Correo electrónico" prop="correoelectronico">
                                        <el-input v-model="ruleFormReporteSifilis.correoelectronico"
                                            placeholder="Correo electrónico" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Correo electrónico" prop="correoelectronico">
                                        <el-input v-model="ruleFormReporteSifilis.correoelectronico"
                                            placeholder="Correo electrónico" />
                                    </el-form-item>
                                </el-col>
                                <el-col :span="24">
                                    <h4>OBSERVACIONES RELEVANTES DEL CASO - NO REGISTRE NUEVAMENTE DATOS YA REGISTRADOS
                                        EN
                                        EL FORMATO</h4>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <el-form-item label="Observaciones" prop="observacionesCaso">
                                        <el-input v-model="ruleFormReporteSifilis.observacionesCaso" type="textarea"
                                            placeholder="Observaciones" />
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </section>
                    </el-form>
                </el-tab-pane>
            </el-tabs>
        </section>
    </div>
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
import { RuleFormReporteSifilis } from '@/interfaces/modeloSifils'
import { RuleFormHbDatosGestante, DiagnosticoFormHb, TratamientoFormHb } from '@/interfaces/modeloHb'
import { IDiagnosticoMaterno, ITratamientoMaternoEstadioClinico, IParametrica, ISeguimientoSerologicoGestante, IRetratamientoMaternoGestacional, IAplicacionPenicilinaBenzatinica } from '@/api/ETMIPLUS_API';
type FormInstance = InstanceType<typeof ElForm>
import moment from 'moment';
import * as ETMIPLUS_API from "@/api/ETMIPLUS_API";
import axios from 'axios';
import {
    Delete
} from '@element-plus/icons-vue'

interface ITratamientoMaternoEstadioClinicoFront {
    idTratamientoMaternoEstadioClinico?: number;
    idDiagnosticoMaterno?: number;
    idClasificacionEstadioClinico?: number;
    clasificacionEstadioClinico?: IParametrica;
    aplicaronPenicilinaBenzatinica?: number;
    idResultadoManejoSifilisGestacional?: number;
    resultadoManejoSifilisGestacional?: IParametrica;
    seRealizoDesensibilizacionAplicacionPenicilinaBenzatinica?: number;
    idResultadoPrevenirSifilisCongenita?: number;
    resultadoPrevenirSifilisCongenita?: IParametrica;
    seguimientoSerologicoGestante?: ISeguimientoSerologicoGestante[] | undefined;
    retratamientoMaternoGestacional?: IRetratamientoMaternoGestacional[] | undefined;
    tratamientoMaterno?: IAplicacionPenicilinaBenzatinica[] | undefined;
}

export interface IAplicacionPenicilinaBenzatinicaList {
    idAplicacionPenicilinaBenzatinica?: number;
    idTratamientoMaternoEstadioClinico?: number | undefined;
    idRetratamientoMaternoGestacional?: number | undefined;
    idSeguimientoContactoSexual?: number | undefined;
    esRetratamiento?: number;
    idDosisPenicilinaBenzatinica?: number;
    dosisPenicilinaBenzatinica?: IParametrica;
    fechaAplicacionPenicilinaBenzatinica?: Date;
    edadGestionalAplicacionPenicilinaBenzatinicaSemanas?: number;
    valid?: boolean;
}

export interface ISeguimientoSerologicoGestanteList {
    idSeguimientoSerologicoGestante?: number;
    idTratamientoMaternoEstadioClinico?: number;
    idTipoPruebaNoTreponemicaDuranteGestacion?: number;
    tipoPruebaNoTreponemicaDuranteGestacion?: IParametrica;
    fechaResultadoPruebaNoTreponemica?: Date;
    idDilucionesPruebaNoTreponemicaEsReactiva?: number;
    dilucionesPruebaNoTreponemicaEsReactiva?: [];
    edadGestacionalRealizacionPruebaNoTreponemica?: number;
    valid?: boolean;
}

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
    disabledEight = true
    disabledNine = true
    disabledTen = true
    isVisible = false
    dateFormat = 'DD/MM/YYYY'
    position = 'right'
    DeleteIcon: any = Delete
    labelPosition = ref<FormProps['labelPosition']>('right')

    firstForm = ref<FormInstance>()
    secondForm = ref<FormInstance>()
    thirdForm = ref<FormInstance>()
    fourForm = ref<FormInstance>()
    fiveForm = ref<FormInstance>()
    sixForm = ref<FormInstance>()
    sevenForm = ref<FormInstance>()
    eightForm = ref<FormInstance>()
    nineForm = ref<FormInstance>()
    teneForm = ref<FormInstance>()

    formSize = 'default'

    ETMIPLUS_API_Client = new ETMIPLUS_API.EtmiPlusClient(process.env.VUE_APP_APIURL, axios);
    validarTtoMaternoList: any = true;
    ttoMaternoList: IAplicacionPenicilinaBenzatinicaList[] = [{ dosisPenicilinaBenzatinica: [] as any, fechaAplicacionPenicilinaBenzatinica: new Date(), edadGestionalAplicacionPenicilinaBenzatinicaSemanas: 0, valid: true }]

    validarStoSerologicoMaternoList: any = true;
    seguimientoSerologicoList: ISeguimientoSerologicoGestanteList[] = [{ tipoPruebaNoTreponemicaDuranteGestacion: [] as any, fechaResultadoPruebaNoTreponemica: new Date(), dilucionesPruebaNoTreponemicaEsReactiva: [] as any, edadGestacionalRealizacionPruebaNoTreponemica: 0, valid: true }]

    addFields() {
        this.validarTtoMaternoList = true
        if (this.ttoMaternoList.length <= 2) {
            this.ttoMaternoList.push({ dosisPenicilinaBenzatinica: [] as any, fechaAplicacionPenicilinaBenzatinica: new Date(), edadGestionalAplicacionPenicilinaBenzatinicaSemanas: 0, valid: true });
        } else {
            this.validarTtoMaternoList = true
        }
    }

    removeFields(index: any) {
        this.ttoMaternoList.splice(index, 1);
    }

    validateField = (index: number) => {
        const field = this.ttoMaternoList[index];
        console.log('validador', field.dosisPenicilinaBenzatinica)

        console.log('todos los valores', field.dosisPenicilinaBenzatinica !== null, field.fechaAplicacionPenicilinaBenzatinica !== null, field.edadGestionalAplicacionPenicilinaBenzatinicaSemanas !== null)
        field.valid = field.dosisPenicilinaBenzatinica !== null && field.fechaAplicacionPenicilinaBenzatinica !== null && field.edadGestionalAplicacionPenicilinaBenzatinicaSemanas !== null;
        console.log('valor', field.valid)
        this.validarTtoMaternoList = !field.valid
    };

    addFieldsSegSerologico() {
        this.validarStoSerologicoMaternoList = true
        if (this.seguimientoSerologicoList.length <= 2) {
            this.seguimientoSerologicoList.push({ tipoPruebaNoTreponemicaDuranteGestacion: [] as any, fechaResultadoPruebaNoTreponemica: new Date(), dilucionesPruebaNoTreponemicaEsReactiva: [] as any, edadGestacionalRealizacionPruebaNoTreponemica: 0, valid: true });
        } else {
            this.validarStoSerologicoMaternoList = true
        }
    }

    removeFieldSegSerologico(index: any) {
        this.seguimientoSerologicoList.splice(index, 1);
    }

    validateFieldSegSerologico = (index: number) => {
        const field = this.seguimientoSerologicoList[index];
        console.log('validador', field.tipoPruebaNoTreponemicaDuranteGestacion)

        console.log('todos los valores', field.tipoPruebaNoTreponemicaDuranteGestacion, field.fechaResultadoPruebaNoTreponemica !== null, field.dilucionesPruebaNoTreponemicaEsReactiva, field.edadGestacionalRealizacionPruebaNoTreponemica !== null)
        field.valid = field.tipoPruebaNoTreponemicaDuranteGestacion == 1 || field.tipoPruebaNoTreponemicaDuranteGestacion == 2 && field.fechaResultadoPruebaNoTreponemica !== null && field.dilucionesPruebaNoTreponemicaEsReactiva !== null && field.edadGestacionalRealizacionPruebaNoTreponemica !== null;
        console.log('valor', field.valid)
        this.validarStoSerologicoMaternoList = !field.valid

    };

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

        const tabName = tab.props.name as string;
        console.log('que tab es?:', tabName)
        if (tabName !== undefined) {
            this.getParamsDbFirsTap(tabName)
        }
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
            this.disabledEight = false
        } else if (tabName === 'eight') {
            this.disabledEight = false
        } else if (tabName === 'nine') {
            this.disabledNine = false
        } else if (tabName === 'ten') {
            this.disabledTen = false
        }
        //console.log(elTabComponent)
    }

    /**Inicio Diagnostic materno sifilis */

    ruleFormDiagnosticoMaterno = reactive<IDiagnosticoMaterno>({
        momentoDiagnostico: [] as any,
        edadGestacionalDuranteSemanas: 0,
        seRealizoControlPrenatalDuranteEmbarazo: 0,
        seRealizoPruebaTreponemica: 0,
        pruebaTreponemica: [] as any,
        resultadoPruebaTreponemica: [] as any,
        fechaResultadoPruebaTreponemica: new Date(),
        edadGestacionalALaRealizacionPruebaTreponemicaSemanas: 0,
        seRealizoPruebaNoTreponemica: 0,
        pruebaNoTreponemica: [] as any,
        resultadoPruebaNoTreponemica: [] as any,
        fechaResultadoPruebaNoTreponemica: new Date(),
        reporteDilucionesPruebaNoTreponemicaReactiva: '',
        listReporteDilucionesPruebaNoTreponemicaReactiva: [] as any,
        tratamientoMaternoEstadioClinico: [] as any,
    })


    /**Fin Diagnostic materno sifilis */

    /**Inicio tratamiento materno y estadío clinico sifilis */

    ruleFormEstadioClinico = reactive<ITratamientoMaternoEstadioClinicoFront>({
        clasificacionEstadioClinico: [] as any,
        aplicaronPenicilinaBenzatinica: 0,
        resultadoManejoSifilisGestacional: [] as any,
        seRealizoDesensibilizacionAplicacionPenicilinaBenzatinica: 0,
        resultadoPrevenirSifilisCongenita: [] as any,
        tratamientoMaterno: [] as IAplicacionPenicilinaBenzatinica[],
    })


    /**Inicio tratamiento materno y estadío clinico sifilis */

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

    ruleFormReporteSifilis = reactive<RuleFormReporteSifilis>({
        nombreIntitucionSeguimiento: '',
        nombreQuienRegistraInformacion: '',
        cargoQuienHaceSeguimiento: '',
        telefonoCelular: '',
        telefonoFijo: '',
        correoelectronico: '',
        observacionesCaso: ''
    })

    ruleFormRetMaterno = reactive<IRetratamientoMaternoGestacional>({
        requirioTratamiento: 0,
        causaRetratamiento: [] as any,
        aplicaronPenicilinaBenzatinica: 0,
    })

    /**Inicio validaciones sifilis */
    rulesFormDiagnosticoMaterno = reactive<FormRules<IDiagnosticoMaterno>>({
        edadGestacionalDuranteSemanas: [
            {
                required: true,
                message: 'Por favor digite edad gestacional al diagnostico',
                trigger: 'blur'
            },
        ],
        seRealizoControlPrenatalDuranteEmbarazo: [
            {
                required: true,
                message: 'Por favor seleccione la opción de control prenatal',
                trigger: 'change',
            },
        ],
        seRealizoPruebaTreponemica: [
            {
                required: true,
                message: 'Por favor seleccione la opción',
                trigger: 'change',
            },
        ],
        pruebaTreponemica: [
            {
                required: true,
                message: 'Por favor elije el tipo de prueba',
                trigger: 'change'
            },
        ],
        resultadoPruebaTreponemica: [
            {
                required: true,
                message: 'Por favor digite la edad',
                trigger: 'change'
            },
        ],
        fechaResultadoPruebaTreponemica: [
            {
                required: true,
                message: 'Por favor indique unafecha del resultado',
                trigger: 'blur',
            },
        ],
        edadGestacionalALaRealizacionPruebaTreponemicaSemanas: [
            {
                required: true,
                message: 'Por favor digite edad gestacional',
                trigger: 'blur',
            },
        ],
        seRealizoPruebaNoTreponemica: [
            {
                required: true,
                message: 'Por favor confirmar prueba no tréponémica',
                trigger: 'change',
            },
        ],
        pruebaNoTreponemica: [
            {
                required: true,
                message: 'Por favor seleccione tipo de prueba',
                trigger: 'change',
            },
        ],
        resultadoPruebaNoTreponemica: [
            {
                required: true,
                message: 'Por favor seleccione el resultado',
                trigger: 'change',
            },
        ],
        fechaResultadoPruebaNoTreponemica: [
            {
                required: true,
                message: 'Por favor fecha del resultado',
                trigger: 'change',
            },
        ],
        listReporteDilucionesPruebaNoTreponemicaReactiva: [
            {
                required: true,
                message: 'Por favor elija la dilucion respectiva',
                trigger: 'change'
            },
        ]
    })


    rulesFormEstadioClinico = reactive<FormRules<ITratamientoMaternoEstadioClinico>>({
        clasificacionEstadioClinico: [
            {
                required: true,
                message: 'Por favor elija clasificación',
                trigger: 'change'
            }
        ],
        aplicaronPenicilinaBenzatinica: [
            {
                required: true,
                message: 'Por favor seleccione la opción',
                trigger: 'change'
            }
        ],
        resultadoManejoSifilisGestacional: [
            {
                required: true,
                message: 'Por favor seleccione la opción',
                trigger: 'change'
            }
        ],
        seRealizoDesensibilizacionAplicacionPenicilinaBenzatinica: [
            {
                required: true,
                message: 'Por favor elija si o no',
                trigger: 'change'
            }
        ],
        resultadoPrevenirSifilisCongenita: [
            {
                required: true,
                message: 'Por favor elija la opción correspondiente',
                trigger: 'change'
            }
        ]
    })
    /**Fin validaciones sifilis */

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
    });

    idGestanteCtrl: number | undefined = 0;
    mounted(): void {
        /*window.addEventListener('resize', this.onResize);
        if (window.innerWidth <= 991) { 
        } else { 
            //this.labelPosition = ref<FormProps['labelPosition']>(this.position)
        }
*/
        const gestanteCtrl = this.$route.params.idGCtrl;
        this.idGestanteCtrl = Number(gestanteCtrl);
        this.getParamsDbFirsTap('second');
        //this.getAllFicha(this.idGestanteCtrl)

    }

    momentoDiagnosticoList: IParametrica[] = [];
    tipoPruebaTreponemicaList: IParametrica[] = [];
    tipoPruebaNoTreponemicaList: IParametrica[] = [];
    reporteDilucionesList: IParametrica[] = [];
    clasificacionEstadioClinicoList: IParametrica[] = [];
    dosisPenicilinaBenzList: IParametrica[] = [];
    dosisPruebaNoTreponemica: IParametrica[] = [];
    situacionGestanteList: IParametrica[] = [];
    sexoList: IParametrica[] = [];
    tipoDocList: IParametrica[] = [];
    criterioUtilizadoList: IParametrica[] = [];
    retratamientoMaternoList: IParametrica[] = [];

    async getParamsDbFirsTap(step: string) {
        if (step === 'second') {
            if (this.momentoDiagnosticoList.length === 0) {
                const getParamsDiagnosticMoment = await this.ETMIPLUS_API_Client.parametrica2('MOMENTO_DIAGNOSTICO') as any;
                console.log('que trae 1', getParamsDiagnosticMoment)
                this.momentoDiagnosticoList = getParamsDiagnosticMoment.data
            }

            if (this.tipoPruebaTreponemicaList.length === 0) {
                const getParamsPruebaTreponemica = await this.ETMIPLUS_API_Client.parametrica2('TIPO_PRUEBA_TREPONEMICA') as any;
                console.log('que trae 1', getParamsPruebaTreponemica)
                this.tipoPruebaTreponemicaList = getParamsPruebaTreponemica.data
            }

            if (this.tipoPruebaNoTreponemicaList.length === 0) {
                const getParamsPruebaNoTreponemica = await this.ETMIPLUS_API_Client.parametrica2('TIPO_PRUEBA_NO_TREPONEMICA') as any;
                console.log('que trae 1', getParamsPruebaNoTreponemica)
                this.tipoPruebaNoTreponemicaList = getParamsPruebaNoTreponemica.data
            }

            if (this.reporteDilucionesList.length === 0) {
                const getParamsReporteDiluciones = await this.ETMIPLUS_API_Client.parametrica2('DILUCIONES_PRUEBA_NO_TREPONEMICA_ES_REACTIVA') as any;
                console.log('que trae 1', getParamsReporteDiluciones)
                this.reporteDilucionesList = getParamsReporteDiluciones.data
            }


        } else if (step === 'third') {
            if (this.clasificacionEstadioClinicoList.length === 0) {
                const getParamsEstadoClinico = await this.ETMIPLUS_API_Client.parametrica2('CLASIFICACION_ESTADIO_CLINICO') as any;
                console.log('que trae getParamsEstadoClinico', getParamsEstadoClinico)
                this.clasificacionEstadioClinicoList = getParamsEstadoClinico.data
            }

            if (this.dosisPenicilinaBenzList.length === 0) {
                const getParamsdosisPenicilinaBenz = await this.ETMIPLUS_API_Client.parametrica2('DOSIS_PENICILINA_BENZATINICA') as any;
                console.log('que trae getParamsdosisPenicilinaBenz', getParamsdosisPenicilinaBenz)
                this.dosisPenicilinaBenzList = getParamsdosisPenicilinaBenz.data
            }
        } else if (step === 'four') {

            if (this.tipoPruebaNoTreponemicaList.length === 0) {
                const getParamsPruebaNoTreponemica = await this.ETMIPLUS_API_Client.parametrica2('TIPO_PRUEBA_NO_TREPONEMICA') as any;
                console.log('que trae 1', getParamsPruebaNoTreponemica)
                this.tipoPruebaNoTreponemicaList = getParamsPruebaNoTreponemica.data
            }
        } else if (step === 'five') {

            if (this.retratamientoMaternoList.length === 0) {
                const getRetratamientoMaterno = await this.ETMIPLUS_API_Client.parametrica2('CAUSA_RETRATAMIENTO') as any;
                console.log('que trae 1', getRetratamientoMaterno)
                this.retratamientoMaternoList = getRetratamientoMaterno.data
            }
   
        } else if (step === 'seven') {

            if (this.situacionGestanteList.length === 0) {
                const getParamsSituacionGestante = await this.ETMIPLUS_API_Client.parametrica2('SITUACION_GESTANTE') as any;
                console.log('que trae 1', getParamsSituacionGestante)
                this.situacionGestanteList = getParamsSituacionGestante.data
            }

            if (this.sexoList.length === 0) {
                const getParamsSexo = await this.ETMIPLUS_API_Client.parametrica2('SEXO') as any;
                console.log('que trae 1', getParamsSexo)
                this.sexoList = getParamsSexo.data
            }

            if (this.tipoDocList.length === 0) {
                const getParamsTipoDoc = await this.ETMIPLUS_API_Client.parametrica2('TIPO_DOCUMENTO_NINO') as any;
                console.log('que trae 1', getParamsTipoDoc)
                this.tipoDocList = getParamsTipoDoc.data
            }
        } else if (step === 'eigth') {
            if (this.tipoPruebaNoTreponemicaList.length === 0) {
                const getParamsPruebaNoTreponemica = await this.ETMIPLUS_API_Client.parametrica2('TIPO_PRUEBA_NO_TREPONEMICA') as any;
                console.log('que trae 1', getParamsPruebaNoTreponemica)
                this.tipoPruebaNoTreponemicaList = getParamsPruebaNoTreponemica.data
            }
            if (this.reporteDilucionesList.length === 0) {
                const getParamsReporteDiluciones = await this.ETMIPLUS_API_Client.parametrica2('DILUCIONES_PRUEBA_NO_TREPONEMICA_ES_REACTIVA') as any;
                console.log('que trae 1', getParamsReporteDiluciones)
                this.reporteDilucionesList = getParamsReporteDiluciones.data
            }
        } else if (step === 'nine') {
            if (this.criterioUtilizadoList.length === 0) {
                const getParamsCriterioUtilizado = await this.ETMIPLUS_API_Client.parametrica2('CRITERIO_UTILIZADO') as any;
                console.log('que trae 1', getParamsCriterioUtilizado)
                this.criterioUtilizadoList = getParamsCriterioUtilizado.data
            }
        }
    }

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

.serologia-retratamiento {
    text-align: center;
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
    margin-left: 0 !important
}

/*.demo-ruleForm .el-form-item--default .el-form-item__label {
    line-height: 16px;
    display: flex;
    align-items: center;
    text-align: end;
}*/

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

.full-width {
    width: 100%
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

.el-tabs__nav-wrap {
    display: flex;
    align-items: center;
}
</style>