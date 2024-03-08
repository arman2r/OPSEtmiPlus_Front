<template class="steps-container">
    <div class="w-100">
        <h4>SEGUIMIENTO CLÍNICO DE LA GESTANTE CON ENFERMEDAD DE CHAGAS</h4>
        <section class="w-100">
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">

                <el-tab-pane label="Diagnostico" name="second" ref="elTab2">

                    <section style="width: 100%;">
                        <el-form :model="ruleFormDiagnosticoGestante" :rules="rulesFormDiagnosticoGestante"
                            style="width: 100%;" label-width="50%" label-position="top" :size="formSize" status-icon
                            ref="secondForm">
                            <el-row :gutter="10" style="width: 100%;">
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <h5>CONDICIÓN EN EL MOMENTO DEL DIAGNÓSTICO DE ENFERMEDAD DE CHAGAS</h5>
                                </el-col>

                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <el-form-item label="Condición en el momento del diagnostico"
                                        prop="condicionDiagnoticoChagas" class="w-100">
                                        <el-select v-model="ruleFormDiagnosticoGestante.condicionDiagnoticoChagas"
                                            placeholder="Condición en el momento del diagnostico">
                                            <el-option v-for="(cmmd, index) in condicionMomentoDiagnosticoList" :key="index"
                                                :label="cmmd.valor" :value="cmmd.id" />
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
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
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Fecha probable del parto:" prop="fechaProbableParto" class="w-100">
                                        <el-date-picker type="date" placeholder="Fecha probable del parto"
                                            v-model="ruleFormDiagnosticoGestante.fechaProbableParto" :format="dateFormat" />
                                    </el-form-item>
                                </el-col>

                            </el-row>
                        </el-form>
                        <el-form :model="ruleFormAlgoritmoChagas" :rules="rulesFormAlgoritmoChagas" style="width: 100%;"
                            label-position="top" :size="formSize" status-icon ref="secondFormAlgoritmoChagas">
                            <el-row :gutter="10" style="width: 100%;">
                                <el-col :span="24">
                                    <h4>ALGORITMO UTILIZADO PARA CONFIRMAR EL DIAGNOSTICO DE ENFERDAD DE CHAGAS:</h4>
                                </el-col>

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
                                                                <el-form-item>
                                                                    <el-radio :label="1">Gota gruesa a partir de sangre
                                                                        fresca</el-radio>
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                                <el-form-item label="RESULTADO">
                                                                    <el-input
                                                                        v-model="ruleFormAlgoritmoChagas.resultadoExamenParasitologico"
                                                                        type="number" />
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                                class="align-end">
                                                                <el-form-item>
                                                                    <el-radio :label="2">Frotis o extendido a partir de
                                                                        sangre</el-radio>
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                                <el-form-item label="RESULTADO">
                                                                    <el-input
                                                                        v-model="ruleFormAlgoritmoChagas.resultadoExamenParasitologico"
                                                                        type="number" />
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                                class="align-end">
                                                                <el-form-item>
                                                                    <el-radio :label="3">Microhematocrito</el-radio>
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                                <el-form-item label="RESULTADO">
                                                                    <el-input
                                                                        v-model="ruleFormAlgoritmoChagas.resultadoExamenParasitologico"
                                                                        type="number" />
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                                class="align-end">
                                                                <el-form-item>
                                                                    <el-radio :label="4">Método de strout</el-radio>
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                                <el-form-item label="RESULTADO">
                                                                    <el-input
                                                                        v-model="ruleFormAlgoritmoChagas.resultadoExamenParasitologico"
                                                                        type="number" />
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                                class="align-end">
                                                                <el-form-item>
                                                                    <el-radio :label="5">Micrométodo</el-radio>
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                                <el-form-item label="RESULTADO">
                                                                    <el-input
                                                                        v-model="ruleFormAlgoritmoChagas.resultadoExamenParasitologico"
                                                                        type="number" />
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                                style="align-items:center">
                                                                <el-form-item class="w-100" label="Fecha
                                                                de recolección de muestra"
                                                                    prop="fechaRecoleccionMuestra">
                                                                    <el-date-picker
                                                                        v-model="ruleFormAlgoritmoChagas.fechaRecoleccionMuestra"
                                                                        style="margin-bottom:8px" type="date"
                                                                        placeholder="Fecha de recolección de muestra"
                                                                        :format="dateFormat" />
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                                style="align-items:center">
                                                                <el-form-item class="w-100"
                                                                    label="Fecha de emisión del resultado"
                                                                    prop="fechaEmisionResultado">
                                                                    <el-date-picker
                                                                        v-model="ruleFormAlgoritmoChagas.fechaEmisionResultado"
                                                                        style="margin-bottom:8px" type="date"
                                                                        placeholder="Fecha de recolección de muestra"
                                                                        :format="dateFormat" />
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
                                        de chagas cronico o tamizaje del control prenatal:"
                                        prop="sospechaChagasCronicoOTamizajeControlPrenatal">
                                        <el-radio-group
                                            v-model="ruleFormAlgoritmoChagas.sospechaChagasCronicoOTamizajeControlPrenatal">
                                            <el-radio :label="1">Aplica</el-radio>
                                            <el-radio :label="0">No Aplica</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <div class="demo-collapse">
                                        <el-collapse>
                                            <el-collapse-item
                                                title="Algoritmo 1. Serología para detección de anticuerpos totales contra Tripanozoma Cruzi por dos tecnicas de ELISA"
                                                name="1">
                                                <div>
                                                    <el-row :gutter="20">
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="align-end">
                                                            <h5>Prueba de tamizaje ELISA con Antigenos totales</h5>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="RESULTADO"
                                                                prop="resultadoPruebaTamizajeElisaAntigenosTotales">
                                                                <el-input
                                                                    v-model="ruleFormAlgoritmoChagas.resultadoPruebaTamizajeElisaAntigenosTotales"
                                                                    type="number" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de recolección de muestra</label>
                                                            <el-date-picker
                                                                v-model="ruleFormAlgoritmoChagas.fechaRecoleccionMuestraElisaAntigenosTotales"
                                                                style="margin-bottom:8px" type="date"
                                                                placeholder="Fecha de recolección de muestra"
                                                                :format="dateFormat" />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de emisión del resultado</label>
                                                            <el-date-picker
                                                                v-model="ruleFormAlgoritmoChagas.fechaEmisionResultadoElisaAntigenosTotales"
                                                                style="margin-bottom:8px" type="date"
                                                                placeholder="Fecha de emisión" :format="dateFormat" />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="align-end">
                                                            <h5>Prueba confirmatoria ELISA con Antigenos recombinantes</h5>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="RESULTADO"
                                                                prop="resultadoPruebaTamizajeElisaAntigenosRecombinantes1">
                                                                <el-input
                                                                    v-model="ruleFormAlgoritmoChagas.resultadoPruebaTamizajeElisaAntigenosRecombinantes1"
                                                                    type="number" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de recolección de muestra</label>
                                                            <el-date-picker
                                                                v-model="ruleFormAlgoritmoChagas.fechaRecoleccionMuestraRecombinantes1"
                                                                style="margin-bottom:8px" type="date"
                                                                placeholder="Fecha de recolección de muestra"
                                                                :format="dateFormat" />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de emisión del resultado</label>
                                                            <el-date-picker
                                                                v-model="ruleFormAlgoritmoChagas.fechaEmisionResultadoRecombinantes1"
                                                                style="margin-bottom:8px" type="date"
                                                                placeholder="Fecha de emisión" :format="dateFormat" />
                                                        </el-col>
                                                    </el-row>

                                                </div>
                                            </el-collapse-item>
                                            <el-collapse-item
                                                title="Algoritmo 2. Serología con la primera prueba rápida y la segunda ELISA recombinante"
                                                name="2">
                                                <div>
                                                    <el-row :gutter="20">
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="align-end">
                                                            <h5>Prueba de tamizaje Inmunocromatografía o prueba rápida</h5>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="RESULTADO"
                                                                prop="resultadoPruebaTamizajeInmunocromatografia">
                                                                <el-input
                                                                    v-model="ruleFormAlgoritmoChagas.resultadoPruebaTamizajeInmunocromatografia"
                                                                    type="number" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de recolección de muestra</label>
                                                            <el-date-picker
                                                                v-model="ruleFormAlgoritmoChagas.fechaRecoleccionMuestraInmunocromatografia"
                                                                style="margin-bottom:8px" type="date"
                                                                placeholder="Fecha de recolección de muestra"
                                                                :format="dateFormat" />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de emisión del resultado</label>
                                                            <el-date-picker
                                                                v-model="ruleFormAlgoritmoChagas.fechaEmisionInmunocromatografia"
                                                                style="margin-bottom:8px" type="date"
                                                                placeholder="Fecha de emisión" :format="dateFormat" />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="align-end">
                                                            <h5>Prueba confirmatoria ELISA con Antígenos recombinantes</h5>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="RESULTADO"
                                                                prop="resultadoPruebaTamizajeElisaAntigenosRecombinantes1">
                                                                <el-input
                                                                    v-model="ruleFormAlgoritmoChagas.resultadoPruebaTamizajeElisaAntigenosRecombinantes2"
                                                                    type="number" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de recolección de muestra</label>
                                                            <el-date-picker
                                                                v-model="ruleFormAlgoritmoChagas.fechaRecoleccionMuestraRecombinantes2"
                                                                style="margin-bottom:8px" type="date"
                                                                placeholder="Fecha de recolección de muestra"
                                                                :format="dateFormat" />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de emisión del resultado</label>
                                                            <el-date-picker
                                                                v-model="ruleFormAlgoritmoChagas.fechaEmisionResultadoRecombinantes2"
                                                                style="margin-bottom:8px" type="date"
                                                                placeholder="Fecha de emisión" :format="dateFormat" />
                                                        </el-col>
                                                    </el-row>

                                                </div>
                                            </el-collapse-item>
                                            <el-collapse-item
                                                title="Pruebas no concordantes (tercera para decidir resultado)" name="3">
                                                <div>
                                                    <el-row :gutter="20">
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="Tipo de prueba utilizada">
                                                                <el-input
                                                                    v-model="ruleFormAlgoritmoChagas.tipoPruebaUtilizada" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="RESULTADO" prop="resultadoPruebaUtilizada">
                                                                <el-input
                                                                    v-model="ruleFormAlgoritmoChagas.resultadoPruebaUtilizada"
                                                                    type="number" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de recolección de muestra</label>
                                                            <el-date-picker
                                                                v-model="ruleFormAlgoritmoChagas.fechaRecoleccionMuestraNoConcordante"
                                                                style="margin-bottom:8px" type="date"
                                                                placeholder="Fecha de recolección de muestra"
                                                                :format="dateFormat" />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de emisión del resultado</label>
                                                            <el-date-picker
                                                                v-model="ruleFormAlgoritmoChagas.fechaEmisionNoConcordante"
                                                                style="margin-bottom:8px" type="date"
                                                                placeholder="Fecha de emisión" :format="dateFormat" />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="align-end mt">
                                                            <h5>Prueba confirmatoria ELISA con Antigenos recombinantes</h5>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt">
                                                            <el-form-item label="RESULTADO"
                                                                prop="resultadoPruebaTamizajeElisaAntigenosRecombinantes3">
                                                                <el-input
                                                                    v-model="ruleFormAlgoritmoChagas.resultadoPruebaTamizajeElisaAntigenosRecombinantes3"
                                                                    type="number" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de recolección de muestra</label>
                                                            <el-date-picker
                                                                v-model="ruleFormAlgoritmoChagas.fechaRecoleccionMuestraRecombinantes3"
                                                                style="margin-bottom:8px" type="date"
                                                                placeholder="Fecha de recolección de muestra"
                                                                :format="dateFormat" />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de emisión del resultado</label>
                                                            <el-date-picker
                                                                v-model="ruleFormAlgoritmoChagas.fechaEmisionResultadoRecombinantes3"
                                                                style="margin-bottom:8px" type="date"
                                                                placeholder="Fecha de emisión" :format="dateFormat" />
                                                        </el-col>
                                                    </el-row>

                                                </div>
                                            </el-collapse-item>
                                        </el-collapse>
                                    </div>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="12" class="column-custom mb mt">
                                    <el-form-item label="Caso confirmado de
                                        gestante con enferdad de chagas:" prop="esConfirmadoGestanteConChagas">
                                        <el-radio-group v-model="ruleFormAlgoritmoChagas.esConfirmadoGestanteConChagas">
                                            <el-radio :label="1">Si</el-radio>
                                            <el-radio :label="0">No</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="12" class="column-custom mb mt">
                                    <el-form-item label="Caso de gestante
                                        descartado con enferdad de chagas:" prop="esDescartadoGestanteConChagas">
                                        <el-radio-group v-model="ruleFormAlgoritmoChagas.esDescartadoGestanteConChagas">
                                            <el-radio :label="1">Si</el-radio>
                                            <el-radio :label="0">No</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="column-custom mb mt">
                                    <el-form-item label="Número de hijos
                                        diferentes al fruto del embarazo en curso a los que se les debe realizar pruebas de
                                        diagnostico de Chagas:">
                                        <el-form-item label="Nro de Hijos"
                                            prop="numeroHijosDiferenteAlEmbarazoParaRealizarDiagnosticoChagas">
                                            <el-input
                                                v-model="ruleFormAlgoritmoChagas.numeroHijosDiferenteAlEmbarazoParaRealizarDiagnosticoChagas"
                                                type="number" />
                                        </el-form-item>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row class="row-bg" justify="end">
                                <div class="btn-save">
                                    <el-button type="primary" size="default"
                                        @click="submitForm(secondForm, 'third')">guardar y
                                        continuar</el-button>
                                </div>
                            </el-row>
                        </el-form>
                    </section>
                </el-tab-pane>
                <el-tab-pane label="Tratamiento materno" name="third" ref="elTab3">
                    <el-form :model="ruleFormTratamientoMaterno" :rules="rulesFormTratamientoMaterno" style="width: 100%;"
                        label-position="top" :size="formSize" status-icon ref="thirdForm">
                        <section style="width: 100%;">
                            <el-row :gutter="10" style="width: 100%;">
                                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                    <el-form-item label="Medicamento:" prop="benznidazolX60Dias" class="w-100">
                                        <el-checkbox v-model="ruleFormTratamientoMaterno.benznidazolX60Dias">Benznidazol *
                                            60 días</el-checkbox>
                                    </el-form-item>
                                </el-col>

                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" style="align-items:end">
                                    <el-form-item label="Fecha de inicio del tratamiento" prop="fechaInicioTratamiento"
                                        class="w-100">
                                        <el-date-picker style="margin-bottom:8px" type="date" placeholder="Fecha de emisión"
                                            :format="dateFormat"
                                            v-model="ruleFormTratamientoMaterno.fechaInicioTratamiento" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                    <el-form-item label="Medicamento:" prop="nufurtimoxX60Dias" class="w-100">
                                        <el-checkbox v-model="ruleFormTratamientoMaterno.nufurtimoxX60Dias">Nufurtimox *60
                                            días</el-checkbox>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Controles médicos" prop="nufurtimoxControlesMedicos" class="w-100">
                                        <el-select v-model="ruleFormTratamientoMaterno.nufurtimoxControlesMedicos"
                                            placeholder="Select" style="width: 100%">
                                            <el-option v-for="(item, index) in nufurtimoxCtrlMedico" :key="index"
                                                :label="item.valor" :value="item.id" />
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                    <el-form-item label="Finalización de lactancia materna"
                                        prop="finalizacionLactanciaMaterna" class="w-100">
                                        <el-radio-group v-model="ruleFormTratamientoMaterno.finalizacionLactanciaMaterna">
                                            <el-radio :label="1">Si</el-radio>
                                            <el-radio :label="0">No</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                    <el-form-item label="Metodo anticonceptivo utilizado durante el embarazo"
                                        prop="metodoAnticonceptivoUtilizadoDuranteTratamiento">
                                        <el-input
                                            v-model="ruleFormTratamientoMaterno.metodoAnticonceptivoUtilizadoDuranteTratamiento" />
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row class="row-bg" justify="end">
                                <div class="btn-save">
                                    <el-button type="primary" size="default" @click="submitForm(thirdForm, 'four')">guardar
                                        y
                                        continuar</el-button>
                                </div>
                            </el-row>
                        </section>
                    </el-form>

                </el-tab-pane>
                <el-tab-pane label="Diagnostico del menor" name="four" ref="elTab5">
                    <el-form :model="ruleFormDiagnosticoMenor" :rules="rulesFormDiagnosticoMenor" style="width: 100%;"
                        label-position="top" :size="formSize" status-icon ref="fourForm">
                        <section style="width: 100%;">
                            <el-row :gutter="10" style="width: 100%;">
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">

                                    <div class="demo-collapse">
                                        <el-collapse v-model="activeCollapseKids1">
                                            <el-collapse-item title="Prueba de diagnostico al nacer" name="1">
                                                <div>
                                                    <el-row :gutter="20">
                                                        <el-col :xs="24" :sm="24" :lg="24">
                                                            <h4 class="align-start">EXAMEN PARASITOLÓGICO</h4>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            style="align-items:center"
                                                            class="hidden-sm-and-down hidden-sm-and-up hidden-md-and-down hidden-md-and-up hidden-lg-and-down hidden-lg-and-up">
                                                            <el-form-item class="w-100" label="Fecha
                                                                de nacimiento" prop="fechaNacimiento">
                                                                <el-date-picker style="margin-bottom:8px" type="date"
                                                                    placeholder="Fecha de emisión" :format="dateFormat"
                                                                    v-model="ruleFormDiagnosticoMenor.fechaNacimiento" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-radio-group
                                                            v-model="ruleFormDiagnosticoMenor.examenParasitologico">
                                                            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                                class="align-end">
                                                                <el-form-item>
                                                                    <el-radio :label="1">Gota gruesa a partir de sangre
                                                                        fresca</el-radio>
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                                <el-form-item label="RESULTADO">
                                                                    <el-input
                                                                        v-model="ruleFormDiagnosticoMenor.resultadoExamenParasitologico"
                                                                        type="number" />
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                                class="align-end">
                                                                <el-form-item>
                                                                    <el-radio :label="2">Frotis o extendido a partir de
                                                                        sangre</el-radio>
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                                <el-form-item label="RESULTADO">
                                                                    <el-input
                                                                        v-model="ruleFormDiagnosticoMenor.resultadoExamenParasitologico"
                                                                        type="number" />
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                                class="align-end">
                                                                <el-form-item>
                                                                    <el-radio :label="3">Microhematocrito</el-radio>
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                                <el-form-item label="RESULTADO">
                                                                    <el-input
                                                                        v-model="ruleFormDiagnosticoMenor.resultadoExamenParasitologico"
                                                                        type="number" />
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                                class="align-end">
                                                                <el-form-item>
                                                                    <el-radio :label="4">Método de strout</el-radio>
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                                <el-form-item label="RESULTADO">
                                                                    <el-input
                                                                        v-model="ruleFormDiagnosticoMenor.resultadoExamenParasitologico"
                                                                        type="number" />
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                                class="align-end">
                                                                <el-form-item>
                                                                    <el-radio :label="5">Micrométodo</el-radio>
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                                <el-form-item label="RESULTADO">
                                                                    <el-input
                                                                        v-model="ruleFormDiagnosticoMenor.resultadoExamenParasitologico"
                                                                        type="number" />
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                                style="align-items:center">
                                                                <el-form-item class="w-100" label="Fecha
                                                                de recolección de muestra"
                                                                    prop="fechaRecoleccionMuestra">
                                                                    <el-date-picker
                                                                        v-model="ruleFormDiagnosticoMenor.fechaRecoleccionMuestra"
                                                                        style="margin-bottom:8px" type="date"
                                                                        placeholder="Fecha de recolección de muestra"
                                                                        :format="dateFormat" />
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                                style="align-items:center">
                                                                <el-form-item class="w-100"
                                                                    label="Fecha de emisión del resultado"
                                                                    prop="fechaEmisiónResultado">
                                                                    <el-date-picker
                                                                        v-model="ruleFormDiagnosticoMenor.fechaEmisiónResultado"
                                                                        style="margin-bottom:8px" type="date"
                                                                        placeholder="Fecha de recolección de muestra"
                                                                        :format="dateFormat" />
                                                                </el-form-item>
                                                            </el-col>
                                                        </el-radio-group>
                                                    </el-row>

                                                </div>
                                            </el-collapse-item>
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"
                                                class="column-custom mb mt">
                                                <el-form-item label="Prueba de
                                                    diagnostico a los 3 meses de nacido, en caso de que la prueba de
                                                    diagnóstico al nacer sea NEGATIVA"
                                                    prop="seHacePruebaDiagnostica3Meses">
                                                    <el-radio-group
                                                        v-model="ruleFormDiagnosticoMenor.seHacePruebaDiagnostica3Meses">
                                                        <el-radio :label="1">Aplica</el-radio>
                                                        <el-radio :label="0">No Aplica</el-radio>
                                                    </el-radio-group>
                                                </el-form-item>
                                            </el-col>
                                            <el-collapse-item title="Examen parasitologico" name="2">
                                                <div>
                                                    <el-row :gutter="20">
                                                        <el-col :xs="24" :sm="24" :lg="24">
                                                            <h4 class="align-start">EXAMEN PARASITOLÓGICO</h4>
                                                        </el-col>

                                                        <el-radio-group
                                                            v-model="ruleFormDiagnosticoMenor.examenParasitologico3Meses">
                                                            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                                class="align-end">
                                                                <el-form-item>
                                                                    <el-radio :label="1">Gota gruesa a partir de sangre
                                                                        fresca</el-radio>
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                                <el-form-item label="RESULTADO">
                                                                    <el-input
                                                                        v-model="ruleFormDiagnosticoMenor.resultadoExamenParasitologico3Meses"
                                                                        type="number" />
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                                class="align-end">
                                                                <el-form-item>
                                                                    <el-radio :label="2">Frotis o extendido a partir de
                                                                        sangre</el-radio>
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                                <el-form-item label="RESULTADO">
                                                                    <el-input
                                                                        v-model="ruleFormDiagnosticoMenor.resultadoExamenParasitologico3Meses"
                                                                        type="number" />
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                                class="align-end">
                                                                <el-form-item>
                                                                    <el-radio :label="3">Microhematocrito</el-radio>
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                                <el-form-item label="RESULTADO">
                                                                    <el-input
                                                                        v-model="ruleFormDiagnosticoMenor.resultadoExamenParasitologico3Meses"
                                                                        type="number" />
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                                class="align-end">
                                                                <el-form-item>
                                                                    <el-radio :label="4">Método de strout</el-radio>
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                                <el-form-item label="RESULTADO">
                                                                    <el-input
                                                                        v-model="ruleFormDiagnosticoMenor.resultadoExamenParasitologico3Meses"
                                                                        type="number" />
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                                class="align-end">
                                                                <el-form-item>
                                                                    <el-radio :label="5">Micrométodo</el-radio>
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                                <el-form-item label="RESULTADO">
                                                                    <el-input
                                                                        v-model="ruleFormDiagnosticoMenor.resultadoExamenParasitologico3Meses"
                                                                        type="number" />
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                                style="align-items:center">
                                                                <el-form-item class="w-100" label="Fecha
                                                                de recolección de muestra"
                                                                    prop="fechaRecoleccionMuestra3Meses">
                                                                    <el-date-picker
                                                                        v-model="ruleFormDiagnosticoMenor.fechaRecoleccionMuestra3Meses"
                                                                        style="margin-bottom:8px" type="date"
                                                                        placeholder="Fecha de recolección de muestra"
                                                                        :format="dateFormat" />
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                                style="align-items:center">
                                                                <el-form-item class="w-100"
                                                                    label="Fecha de emisión del resultado"
                                                                    prop="fechaEmisiónResultado3Meses">
                                                                    <el-date-picker
                                                                        v-model="ruleFormDiagnosticoMenor.fechaEmisiónResultado3Meses"
                                                                        style="margin-bottom:8px" type="date"
                                                                        placeholder="Fecha de recolección de muestra"
                                                                        :format="dateFormat" />
                                                                </el-form-item>
                                                            </el-col>
                                                        </el-radio-group>
                                                    </el-row>

                                                </div>
                                            </el-collapse-item>
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"
                                                class="column-custom mb mt">
                                                <el-form-item label="Prueba de
                                                    diagnostico molecular por criterio clínico o
                                                    epidemiológico" prop="seHacePrueebaDiagnosticoMolecular">
                                                    <el-radio-group
                                                        v-model="ruleFormDiagnosticoMenor.seHacePrueebaDiagnosticoMolecular">
                                                        <el-radio :label="1">Si Aplica</el-radio>
                                                        <el-radio :label="0">No Aplica</el-radio>
                                                    </el-radio-group>
                                                </el-form-item>
                                            </el-col>
                                            <el-collapse-item title="Prueba de diagnostico al nacer" name="3">
                                                <div>
                                                    <el-row :gutter="20">
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            style="align-items:end">
                                                            <el-form-item label="Reacción
                                                                en cadena polimerasa (PCR)" prop="resultadoPCR">
                                                                <el-input v-model="ruleFormDiagnosticoMenor.resultadoPCR"
                                                                    placeholder="RESULTADO" type="number" />
                                                            </el-form-item>
                                                        </el-col>

                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            style="align-items:end">
                                                            <el-form-item label="Fecha
                                                                de recolección de muestra" prop="fechaRecolecionPCR">
                                                                <el-date-picker style="margin-bottom:8px" type="date"
                                                                    placeholder="Reacción
                                                                en cadena polimerasa (PCR)"
                                                                    v-model="ruleFormDiagnosticoMenor.fechaRecolecionPCR"
                                                                    :format="dateFormat" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            style="align-items:end">
                                                            <el-form-item label="Fecha
                                                                de emisión del resultado" prop="fechaEmisionPCR">
                                                                <el-date-picker style="margin-bottom:8px" type="date"
                                                                    placeholder="Fecha de emisión del resultado"
                                                                    :format="dateFormat"
                                                                    v-model="ruleFormDiagnosticoMenor.fechaEmisionPCR" />
                                                            </el-form-item>
                                                        </el-col>
                                                    </el-row>
                                                </div>
                                            </el-collapse-item>
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"
                                                class="column-custom mb mt">
                                                <el-form-item label="Pruebas de
                                                    diagnostico serológico a los 8 a 10 meses de nacido si las pruebas de
                                                    diagnóstico directo al momento del nacimiento y a los tre meses de nacer
                                                    son negativas" prop="seHacePruebaDiagnostico10Meses">
                                                    <el-radio-group
                                                        v-model="ruleFormDiagnosticoMenor.seHacePruebaDiagnostico10Meses">
                                                        <el-radio :label="1">Si Aplica</el-radio>
                                                        <el-radio :label="0">No Aplica</el-radio>
                                                    </el-radio-group>
                                                </el-form-item>
                                            </el-col>
                                            <el-collapse-item title="Prueba de diagnostico al nacer" name="4">
                                                <div>
                                                    <el-row :gutter="20">
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8"
                                                            class="column-custom">
                                                            <el-form-item label="Antigenos:" prop="esAntigenosTotales"
                                                                class="w-100">
                                                                <el-checkbox
                                                                    v-model="ruleFormDiagnosticoMenor.esAntigenosTotales"
                                                                    :label="1">Antigenos
                                                                    totales</el-checkbox>
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8"
                                                            class="column-custom">
                                                            <el-form-item label="Antigenos:" prop="esAntigenosRecombinantes"
                                                                class="w-100">
                                                                <el-checkbox
                                                                    v-model="ruleFormDiagnosticoMenor.esAntigenosRecombinantes"
                                                                    :label="2">Antigenos
                                                                    recombinantes</el-checkbox>
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8"
                                                            class="column-custom" style="align-items:end">
                                                            <el-form-item label="RESULTADO" class="w-100"
                                                                prop="resultadoPrueba">
                                                                <el-input v-model="ruleFormDiagnosticoMenor.resultadoPrueba"
                                                                    type="number" />
                                                            </el-form-item>
                                                        </el-col>

                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            style="align-items:end">
                                                            <el-form-item label="Fecha
                                                                de recolección de muestra"
                                                                prop="fechaRecoleccionMuestra10Meses">
                                                                <el-date-picker style="margin-bottom:8px" type="date"
                                                                    placeholder="Fecha de recolección de muestra"
                                                                    :format="dateFormat"
                                                                    v-model="ruleFormDiagnosticoMenor.fechaRecoleccionMuestra10Meses" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            style="align-items:end">
                                                            <el-form-item label="Fecha
                                                                de emisión del resultado"
                                                                prop="fechaEmisionResultado10Meses">
                                                                <el-date-picker style="margin-bottom:8px" type="date"
                                                                    placeholder="Fecha de emisión del resultado"
                                                                    :format="dateFormat"
                                                                    v-model="ruleFormDiagnosticoMenor.fechaEmisionResultado10Meses" />
                                                            </el-form-item>
                                                        </el-col>
                                                    </el-row>
                                                </div>
                                            </el-collapse-item>
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"
                                                class="column-custom mb mt">
                                                <el-form-item label="Caso
                                                    confirmado de TMI de la enfermedad de chagas"
                                                    prop="esCasoConfirmadoTMIChagas">
                                                    <el-radio-group
                                                        v-model="ruleFormDiagnosticoMenor.esCasoConfirmadoTMIChagas">
                                                        <el-radio :label="1">Si</el-radio>
                                                        <el-radio :label="0">No</el-radio>
                                                    </el-radio-group>
                                                </el-form-item>
                                            </el-col>
                                        </el-collapse>
                                    </div>
                                </el-col>
                            </el-row>
                            <el-row class="row-bg" justify="end">
                                <div class="btn-save">
                                    <el-button type="primary" size="default" @click="submitForm(fourForm, 'five')">guardar
                                        y
                                        continuar</el-button>
                                </div>
                            </el-row>
                        </section>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="Datos demograficos" name="five" ref="elTab4">
                    <el-form :model="ruleFormSeguimientoNinoExpuesto" :rules="rulesFormSeguimientoNinoExpuesto"
                        style="width: 100%;" label-position="top" :size="formSize" status-icon ref="fiveForm">
                        <section style="width: 100%;">
                            <el-row :gutter="10" style="width: 100%;">
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Fecha de
                                        nacimiento" prop="fechaNacimiento">
                                        <el-date-picker v-model="ruleFormSeguimientoNinoExpuesto.fechaNacimiento"
                                            type="date" placeholder="Fecha de nacimiento" :format="dateFormat" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="column-custom mb">
                                    <el-form-item label="Condición del recien nacido" prop="condicionRecienNacido">
                                        <el-radio-group v-model="ruleFormSeguimientoNinoExpuesto.condicionRecienNacido">
                                            <el-radio :label="1">Vivo</el-radio>
                                            <el-radio :label="2">Mortinato</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="column-custom mb">
                                    <el-form-item label="Número de productos al nacimiento"
                                        prop="numeroProductosNacimiento">
                                        <el-radio-group v-model="ruleFormSeguimientoNinoExpuesto.numeroProductosNacimiento">
                                            <el-radio :label="1">único</el-radio>
                                            <el-radio :label="2">Multiple</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Edad gestacional al nacimiento, en semanas"
                                        prop="edadGestacionalNacimientoSemanas">
                                        <el-input type="number"
                                            v-model="ruleFormSeguimientoNinoExpuesto.edadGestacionalNacimientoSemanas" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Peso en gramos" prop="pesoGramos">
                                        <el-input type="number" v-model="ruleFormSeguimientoNinoExpuesto.pesoGramos" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="column-custom mb">
                                    <el-form-item label="Sexo" prop="sexo">
                                        <el-radio-group v-model="ruleFormSeguimientoNinoExpuesto.sexo">
                                            <el-radio :label="1">Hombre</el-radio>
                                            <el-radio :label="2">Mujer</el-radio>
                                            <el-radio :label="3">Intersexual</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="column-custom mb">
                                    <el-form-item label="Tipo de parto" prop="tipoParto">
                                        <el-radio-group v-model="ruleFormSeguimientoNinoExpuesto.tipoParto">
                                            <el-radio :label="1">Cesarea</el-radio>
                                            <el-radio :label="2">Vaginal</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Tipo de regimen de salud" prop="tipoRegimenSalud" class="w-100">
                                        <el-select placeholder="Tipo de regimen de salud"
                                            v-model="ruleFormSeguimientoNinoExpuesto.tipoRegimenSalud">
                                            <el-option label="Excepción" value="1" />
                                            <el-option label="Contributivo" value="2" />
                                            <el-option label="Subsidiado" value="3" />
                                            <el-option label="Especial" value="4" />
                                            <el-option label="No asegurado" value="5" />
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Nombre aseguradora (EAPB)" prop="nombreAseguradoraEAPB">
                                        <el-input v-model="ruleFormSeguimientoNinoExpuesto.nombreAseguradoraEAPB" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Nombres y Apellidos" prop="nombresApellidos">
                                        <el-input v-model="ruleFormSeguimientoNinoExpuesto.nombresApellidos" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Tipo de Documento" prop="tipoDocumento" class="w-100">
                                        <el-select placeholder="Tipo de Documento"
                                            v-model="ruleFormSeguimientoNinoExpuesto.tipoDocumento">
                                            <el-option label="RC" value="1" />
                                            <el-option label="CNV" value="2" />
                                            <el-option label="MS" value="3" />

                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Número de identificación" prop="numeroIdentificacion">
                                        <el-input type="number"
                                            v-model="ruleFormSeguimientoNinoExpuesto.numeroIdentificacion" />
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row class="row-bg" justify="end">
                                <div class="btn-save">
                                    <el-button type="primary" size="default" @click="submitForm(fiveForm, 'six')">guardar
                                        y
                                        continuar</el-button>
                                </div>
                            </el-row>
                        </section>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="Tratamiento del menor" name="six" ref="elTab6">
                    <el-form :model="ruleFormTratamientoSeguimientoNino" :rules="rulesFormTratamientoSeguimientoNino"
                        style="width: 100%;" label-position="top" :size="formSize" status-icon ref="sixForm">
                        <section style="width: 100%;">
                            <el-row :gutter="10" style="width: 100%;">
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <h4 class="align-start">TRATAMIENTO Y SEGUIMIENTO DEL NIÑO O NIÑA CONFIRMADO CON
                                        ENFERMEDAD DE CHAGAS CONGENITO</h4>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                    <el-form-item label="Medicamento:" prop="benznidazolX60Dias" class="w-100">
                                        <el-checkbox
                                            v-model="ruleFormTratamientoSeguimientoNino.benznidazolX60Dias">Benznidazol
                                            *
                                            60 días</el-checkbox>
                                    </el-form-item>
                                </el-col>

                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" style="align-items:end">
                                    <el-form-item label="Fecha de inicio del tratamiento" prop="fechaInicioTratamiento"
                                        class="w-100">
                                        <el-date-picker style="margin-bottom:8px" type="date" placeholder="Fecha de emisión"
                                            :format="dateFormat"
                                            v-model="ruleFormTratamientoSeguimientoNino.fechaInicioTratamiento" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                    <el-form-item label="Medicamento:" prop="nufurtimoxX60Dias" class="w-100">
                                        <el-checkbox
                                            v-model="ruleFormTratamientoSeguimientoNino.nufurtimoxX60Dias">Nufurtimox
                                            *60
                                            días</el-checkbox>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Controles médicos" prop="nufurtimoxControlesMedicos" class="w-100">
                                        <el-select v-model="ruleFormTratamientoSeguimientoNino.nufurtimoxControlesMedicos"
                                            placeholder="Select" style="width: 100%">
                                            <el-option v-for="(item, index) in nufurtimoxCtrlMedico" :key="index"
                                                :label="item.valor" :value="item.id" />
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
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8"
                                                            class="column-custom">
                                                            <el-form-item label="Antigenos:" prop="esAntigenosTotales6Meses"
                                                                class="w-100">
                                                                <el-checkbox
                                                                    v-model="ruleFormTratamientoSeguimientoNino.esAntigenosTotales6Meses"
                                                                    :label="1">Antigenos
                                                                    totales</el-checkbox>
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8"
                                                            class="column-custom">
                                                            <el-form-item label="Antigenos:"
                                                                prop="esAntigenosRecombinantes6Meses" class="w-100">
                                                                <el-checkbox
                                                                    v-model="ruleFormTratamientoSeguimientoNino.esAntigenosRecombinantes6Meses"
                                                                    :label="2">Antigenos
                                                                    recombinantes</el-checkbox>
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8"
                                                            class="column-custom" style="align-items:end">
                                                            <el-form-item label="RESULTADO" class="w-100"
                                                                prop="resultadoPrueba">
                                                                <el-input
                                                                    v-model="ruleFormTratamientoSeguimientoNino.resultadoPruebaSerologica6Meses" />
                                                            </el-form-item>
                                                        </el-col>

                                                        <!--<el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            style="align-items:end">
                                                            <el-form-item label="Fecha
                                                                de recolección de muestra"
                                                                prop="fechaRecoleccionMuestra10Meses">
                                                                <el-date-picker style="margin-bottom:8px" type="date"
                                                                    placeholder="Fecha de recolección de muestra"
                                                                    :format="dateFormat"
                                                                    v-model="ruleFormTratamientoSeguimientoNino.fechaRecoleccionMuestra10Meses" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            style="align-items:end">
                                                            <el-form-item label="Fecha
                                                                de emisión del resultado"
                                                                prop="fechaEmisionResultado10Meses">
                                                                <el-date-picker style="margin-bottom:8px" type="date"
                                                                    placeholder="Fecha de emisión del resultado"
                                                                    :format="dateFormat"
                                                                    v-model="ruleFormTratamientoSeguimientoNino.fechaEmisionResultado10Meses" />
                                                            </el-form-item>
                                                        </el-col>
                                                    -->
                                                    </el-row>
                                                </div>
                                            </el-collapse-item>
                                            <el-collapse-item
                                                title="Prueba de serología a los 12 meses de terminar el tratamiento"
                                                name="2">
                                                <div>
                                                    <el-row :gutter="20">
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8"
                                                            class="column-custom">
                                                            <el-form-item label="Antigenos:"
                                                                prop="esAntigenosTotales12Meses" class="w-100">
                                                                <el-checkbox
                                                                    v-model="ruleFormTratamientoSeguimientoNino.esAntigenosTotales12Meses"
                                                                    :label="1">Antigenos
                                                                    totales</el-checkbox>
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8"
                                                            class="column-custom">
                                                            <el-form-item label="Antigenos:"
                                                                prop="esAntigenosRecombinantes12Meses" class="w-100">
                                                                <el-checkbox
                                                                    v-model="ruleFormTratamientoSeguimientoNino.esAntigenosRecombinantes12Meses"
                                                                    :label="2">Antigenos
                                                                    recombinantes</el-checkbox>
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8"
                                                            class="column-custom" style="align-items:end">
                                                            <el-form-item label="RESULTADO" class="w-100"
                                                                prop="resultadoPruebaSerologica12Meses">
                                                                <el-input
                                                                    v-model="ruleFormTratamientoSeguimientoNino.resultadoPruebaSerologica12Meses"
                                                                    type="string" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <!--
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            style="align-items:end">
                                                            <el-form-item label="Fecha
                                                                de recolección de muestra"
                                                                prop="fechaRecoleccionMuestra10Meses">
                                                                <el-date-picker style="margin-bottom:8px" type="date"
                                                                    placeholder="Fecha de recolección de muestra"
                                                                    :format="dateFormat"
                                                                    v-model="ruleFormTratamientoSeguimientoNino.fechaRecoleccionMuestra10Meses" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            style="align-items:end">
                                                            <el-form-item label="Fecha
                                                                de emisión del resultado"
                                                                prop="fechaEmisionResultado10Meses">
                                                                <el-date-picker style="margin-bottom:8px" type="date"
                                                                    placeholder="Fecha de emisión del resultado"
                                                                    :format="dateFormat"
                                                                    v-model="ruleFormTratamientoSeguimientoNino.fechaEmisionResultado10Meses" />
                                                            </el-form-item>
                                                        </el-col>
                                                        -->
                                                    </el-row>
                                                </div>
                                            </el-collapse-item>
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                                <el-form-item label="Niño curado
                                                    de la enfermedad de chagas" prop="esNinoCuradoChagas"
                                                    class="w-100">
                                                    <el-radio-group
                                                        v-model="ruleFormTratamientoSeguimientoNino.esNinoCuradoChagas">
                                                        <el-radio :label="1">Si</el-radio>
                                                        <el-radio :label="0">No</el-radio>
                                                    </el-radio-group>
                                                </el-form-item>
                                            </el-col>
                                        </el-collapse>
                                    </div>
                                </el-col>
                            </el-row>
                            <el-row class="row-bg" justify="end">
                                <div class="btn-save">
                                    <el-button type="primary" size="default" @click="submitForm(sixForm, 'end')">guardar
                                        y
                                        continuar</el-button>
                                </div>
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
import { ElMessage, ElMessageBox } from 'element-plus'
import type { TabsPaneContext, ElForm } from 'element-plus'
import type { CheckboxValueType } from 'element-plus'
import { RuleFormDatosGestante, RuleFormPrimerReporte, RuleFormSegundoReporte, RuleFormTercerReporte, RuleFormCuartoReporte, RuleFormquintoReporte, RuleFormSeguimiento } from '@/interfaces/modeloVih'
import { RuleFormHbDatosGestante, DiagnosticoFormHb, TratamientoFormHb } from '@/interfaces/modeloHb'
import { IDiagnosticoEnfermedadGestanteChagas, IAlgoritmoChagas, IParametrica, ITratamientoMaternoChagas, ISeguimientoNinoExpuestoChagas, IDiagnosticoNinoExpuestoChagas, ITratamientoSeguimientoNinoChagas } from "@/api/ETMIPLUS_API";
import moment from 'moment';
import * as ETMIPLUS_API from "@/api/ETMIPLUS_API";
import axios from 'axios';

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
    secondFormAlgoritmoChagas = ref<FormInstance>()
    thirdForm = ref<FormInstance>()
    fourForm = ref<FormInstance>()
    fiveForm = ref<FormInstance>()
    sixForm = ref<FormInstance>()
    sevenForm = ref<FormInstance>()

    ETMIPLUS_API_Client = new ETMIPLUS_API.EtmiPlusClient(process.env.VUE_APP_APIURL, axios);

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

    handleClick(tab?: TabsPaneContext, event?: Event) {
        console.log(tab, event)
        const tabName = tab?.props.name as any;
        if (tabName !== undefined) {
            this.getParamsDbFirsTap(tabName)
        }
    }

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
        this.getParamsDbFirsTap('two');
        this.getAllFicha(this.idGestanteCtrl)

    }

    async getAllFicha(idGestanteCtrl: number) {
        const fichaChagas = await this.ETMIPLUS_API_Client.chagas(idGestanteCtrl) as any;
        console.log('llego ficha chagas', fichaChagas)

        if (fichaChagas.data.diagnosticoCompletoGestante.length !== 0) {
            this.ruleFormDiagnosticoGestante.condicionDiagnoticoChagas = fichaChagas.data.diagnosticoCompletoGestante[0].idCondicionDiagnosticoChagas
            this.ruleFormDiagnosticoGestante.edadGestacionalPrimerControlPrentalSemanas = fichaChagas.data.diagnosticoCompletoGestante[0].edadGestacionalPrimerControlPrentalSemanas
            this.ruleFormDiagnosticoGestante.edadGestacionalSemanas = fichaChagas.data.diagnosticoCompletoGestante[0].edadGestacionalSemanas
            this.ruleFormDiagnosticoGestante.fechaProbableParto = fichaChagas.data.diagnosticoCompletoGestante[0].fechaProbableParto
            this.idDiagnosticoGstte = fichaChagas.data.diagnosticoCompletoGestante[0].idDiagnosticoGestante;
            if (fichaChagas.data.diagnosticoCompletoGestante[0].algoritmoChagas.length !== 0) {
                this.ruleFormAlgoritmoChagas.esConfirmadoGestanteConChagas = fichaChagas.data.diagnosticoCompletoGestante[0].algoritmoChagas[0].esConfirmadoGestanteConChagas
                this.ruleFormAlgoritmoChagas.examenParasitologico = fichaChagas.data.diagnosticoCompletoGestante[0].algoritmoChagas[0].idExamenParasitologico
                this.ruleFormAlgoritmoChagas.resultadoExamenParasitologico = fichaChagas.data.diagnosticoCompletoGestante[0].algoritmoChagas[0].resultadoExamenParasitologico
                this.ruleFormAlgoritmoChagas.fechaRecoleccionMuestra = fichaChagas.data.diagnosticoCompletoGestante[0].algoritmoChagas[0].fechaRecoleccionMuestra
                this.ruleFormAlgoritmoChagas.fechaEmisionResultado = fichaChagas.data.diagnosticoCompletoGestante[0].algoritmoChagas[0].fechaEmisionResultado
                this.ruleFormAlgoritmoChagas.sospechaChagasCronicoOTamizajeControlPrenatal = fichaChagas.data.diagnosticoCompletoGestante[0].algoritmoChagas[0].sospechaChagasCronicoOTamizajeControlPrenatal
                this.ruleFormAlgoritmoChagas.resultadoPruebaTamizajeElisaAntigenosTotales = fichaChagas.data.diagnosticoCompletoGestante[0].algoritmoChagas[0].resultadoPruebaTamizajeElisaAntigenosTotales
                this.ruleFormAlgoritmoChagas.fechaRecoleccionMuestraElisaAntigenosTotales = fichaChagas.data.diagnosticoCompletoGestante[0].algoritmoChagas[0].fechaRecoleccionMuestraElisaAntigenosTotales
                this.ruleFormAlgoritmoChagas.fechaEmisionResultadoElisaAntigenosTotales = fichaChagas.data.diagnosticoCompletoGestante[0].algoritmoChagas[0].fechaEmisionResultadoElisaAntigenosTotales
                this.ruleFormAlgoritmoChagas.resultadoPruebaTamizajeElisaAntigenosRecombinantes1 = fichaChagas.data.diagnosticoCompletoGestante[0].algoritmoChagas[0].resultadoPruebaTamizajeElisaAntigenosRecombinantes1
                this.ruleFormAlgoritmoChagas.fechaRecoleccionMuestraInmunocromatografia = fichaChagas.data.diagnosticoCompletoGestante[0].algoritmoChagas[0].fechaRecoleccionMuestraInmunocromatografia
                this.ruleFormAlgoritmoChagas.fechaEmisionResultadoRecombinantes1 = fichaChagas.data.diagnosticoCompletoGestante[0].algoritmoChagas[0].fechaEmisionResultadoRecombinantes1
                this.ruleFormAlgoritmoChagas.resultadoPruebaTamizajeElisaAntigenosRecombinantes2 = fichaChagas.data.diagnosticoCompletoGestante[0].algoritmoChagas[0].resultadoPruebaTamizajeElisaAntigenosRecombinantes2
                this.ruleFormAlgoritmoChagas.fechaRecoleccionMuestraRecombinantes2 = fichaChagas.data.diagnosticoCompletoGestante[0].algoritmoChagas[0].fechaRecoleccionMuestraRecombinantes2
                this.ruleFormAlgoritmoChagas.fechaEmisionResultadoRecombinantes2 = fichaChagas.data.diagnosticoCompletoGestante[0].algoritmoChagas[0].fechaEmisionResultadoRecombinantes2
                this.ruleFormAlgoritmoChagas.tipoPruebaUtilizada = fichaChagas.data.diagnosticoCompletoGestante[0].algoritmoChagas[0].tipoPruebaUtilizada
                this.ruleFormAlgoritmoChagas.tipoPruebaUtilizada = fichaChagas.data.diagnosticoCompletoGestante[0].algoritmoChagas[0].tipoPruebaUtilizada
                this.ruleFormAlgoritmoChagas.resultadoPruebaUtilizada = fichaChagas.data.diagnosticoCompletoGestante[0].algoritmoChagas[0].resultadoPruebaUtilizada
                this.ruleFormAlgoritmoChagas.fechaRecoleccionMuestraNoConcordante = fichaChagas.data.diagnosticoCompletoGestante[0].algoritmoChagas[0].fechaRecoleccionMuestraNoConcordante
                this.ruleFormAlgoritmoChagas.fechaEmisionNoConcordante = fichaChagas.data.diagnosticoCompletoGestante[0].algoritmoChagas[0].fechaEmisionResultadoRecombinantes3
                this.ruleFormAlgoritmoChagas.resultadoPruebaTamizajeElisaAntigenosRecombinantes3 = fichaChagas.data.diagnosticoCompletoGestante[0].algoritmoChagas[0].resultadoPruebaTamizajeElisaAntigenosRecombinantes3
                this.ruleFormAlgoritmoChagas.fechaRecoleccionMuestraRecombinantes3 = fichaChagas.data.diagnosticoCompletoGestante[0].algoritmoChagas[0].fechaRecoleccionMuestraRecombinantes3
                this.ruleFormAlgoritmoChagas.fechaEmisionResultadoRecombinantes3 = fichaChagas.data.diagnosticoCompletoGestante[0].algoritmoChagas[0].fechaEmisionResultadoRecombinantes3
                this.ruleFormAlgoritmoChagas.esConfirmadoGestanteConChagas = fichaChagas.data.diagnosticoCompletoGestante[0].algoritmoChagas[0].esConfirmadoGestanteConChagas
                this.ruleFormAlgoritmoChagas.esDescartadoGestanteConChagas = fichaChagas.data.diagnosticoCompletoGestante[0].algoritmoChagas[0].esDescartadoGestanteConChagas
                this.ruleFormAlgoritmoChagas.numeroHijosDiferenteAlEmbarazoParaRealizarDiagnosticoChagas = fichaChagas.data.diagnosticoCompletoGestante[0].algoritmoChagas[0].numeroHijosDiferenteAlEmbarazoParaRealizarDiagnosticoChagas
            }
            if (fichaChagas.data.diagnosticoCompletoGestante[0].algoritmoChagas[0].tratamientosMaternoChagas.length !== 0) {

                this.ruleFormTratamientoMaterno.benznidazolX60Dias = Number(fichaChagas.data.diagnosticoCompletoGestante[0].algoritmoChagas[0].tratamientosMaternoChagas[0].benznidazolX60Dias)
                this.ruleFormTratamientoMaterno.fechaInicioTratamiento = fichaChagas.data.diagnosticoCompletoGestante[0].algoritmoChagas[0].tratamientosMaternoChagas[0].fechaInicioTratamiento
                this.ruleFormTratamientoMaterno.nufurtimoxX60Dias = Number(fichaChagas.data.diagnosticoCompletoGestante[0].algoritmoChagas[0].tratamientosMaternoChagas[0].nufurtimoxX60Dias)
                this.ruleFormTratamientoMaterno.nufurtimoxControlesMedicos = fichaChagas.data.diagnosticoCompletoGestante[0].algoritmoChagas[0].tratamientosMaternoChagas[0].idNufurtimoxControlesMedicos
                this.ruleFormTratamientoMaterno.finalizacionLactanciaMaterna = fichaChagas.data.diagnosticoCompletoGestante[0].algoritmoChagas[0].tratamientosMaternoChagas[0].finalizacionLactanciaMaterna
                this.ruleFormTratamientoMaterno.metodoAnticonceptivoUtilizadoDuranteTratamiento = fichaChagas.data.diagnosticoCompletoGestante[0].algoritmoChagas[0].tratamientosMaternoChagas[0].metodoAnticonceptivoUtilizadoDuranteTratamiento
            }
        }
        if (fichaChagas.data.diagnosticoNinoExpuestoChagas.length !== 0) {
            this.idDiagnosticoMenor = fichaChagas.data.diagnosticoNinoExpuestoChagas[0].idDiagnosticoNinoExpuesto;
            if (fichaChagas.data.diagnosticoNinoExpuestoChagas[0].seguimientoNinoExpuestoChagas.length !== 0) {
                console.log('entro aqui', fichaChagas.data.diagnosticoNinoExpuestoChagas[0].seguimientoNinoExpuestoChagas[0].idSeguimientoNinoExpuesto)
                this.idSeguimientoTratmtoNino = fichaChagas.data.diagnosticoNinoExpuestoChagas[0].seguimientoNinoExpuestoChagas[0].idSeguimientoNinoExpuesto
                console.log('id del seg.', this.idSeguimientoTratmtoNino)

            }
        }

    }

    condicionMomentoDiagnosticoList: IParametrica[] = []
    nufurtimoxCtrlMedico: IParametrica[] = []

    async getParamsDbFirsTap(step: string) {
        console.log('step', step)
        if (step === 'two') {
            const getParamsDiagnosticMoment = await this.ETMIPLUS_API_Client.parametrica2('MOMENTO_DIAGNOSTICO_CHAGAS') as any;
            console.log('que trae 1', getParamsDiagnosticMoment)
            this.condicionMomentoDiagnosticoList = getParamsDiagnosticMoment.data

        } else if (step === 'six') {
            const ctrlsNufurtimoxCtrlMedico = await this.ETMIPLUS_API_Client.parametrica2('NUFURTIMOX_CONTROL_MEDICO') as any;
            console.log('que trae 2', ctrlsNufurtimoxCtrlMedico)
            this.nufurtimoxCtrlMedico = ctrlsNufurtimoxCtrlMedico.data
        } /*else if (step === 'four') {
            const condicionRecienNacido = await this.ETMIPLUS_API_Client.parametrica2('CONDICION_FINAL_NINO_EXPUESTO') as any;
            this.condicionRecienNacidoList = condicionRecienNacido.data

            const tipoParto = await this.ETMIPLUS_API_Client.parametrica2('TIPO_PARTO') as any;
            this.tipoPartoList = tipoParto.data

            const numeroProductoNacimiento = await this.ETMIPLUS_API_Client.parametrica2('NUMERO_PRODUCTOS_NACIMIENTO') as any;
            this.numeroProductosNacimientoList = numeroProductoNacimiento.data

            const sexo = await this.ETMIPLUS_API_Client.parametrica2('SEXO') as any;
            this.sexoList = sexo.data

            const tipoRegimenSalud = await this.ETMIPLUS_API_Client.parametrica2('TIPO_REGIMEN_SALUD') as any;
            this.tipoRegimenSaludList = tipoRegimenSalud.data

            const tipoDocumento = await this.ETMIPLUS_API_Client.parametrica2('TIPO_DOCUMENTO') as any;
            this.tipoDocumentoList = tipoDocumento.data

            const tiempoAplicacionVacuna = await this.ETMIPLUS_API_Client.parametrica2('TIEMPO_APLICACION_VACUNA_HB') as any;
            this.tiempoAplicacionVacunaList = tiempoAplicacionVacuna.data

            const tiempoAplicacionInmuglobina = await this.ETMIPLUS_API_Client.parametrica2('TIEMPO_APLICACION_INMUNOGLOBULINA_HB') as any;
            this.tiempoAplicacionInmonoglobulinaList = tiempoAplicacionInmuglobina.data

            const dosisVacuna = await this.ETMIPLUS_API_Client.parametrica2('APLICACION_VACUNA_CONTRA_HB') as any;
            this.dosisVacunaList = dosisVacuna.data


        } else if (step === 'five') {
            const clasificacionNinoExp = await this.ETMIPLUS_API_Client.parametrica2('CLASIFICACION_FINAL_NINO_EXPUESTO') as any;
            this.clasificacionNinoExpList = clasificacionNinoExp.data

        } /*else if (step === 'six') {

        }*/
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
            console.log('entro 3', tabName)


            const request: IDiagnosticoEnfermedadGestanteChagas = {
                idDiagnosticoGestante: 0,
                idGestanteControl: this.idGestanteCtrl,
                idCondicionDiagnosticoChagas: Number(this.ruleFormDiagnosticoGestante.condicionDiagnoticoChagas),
                edadGestacionalSemanas: Number(this.ruleFormDiagnosticoGestante.edadGestacionalSemanas),
                edadGestacionalPrimerControlPrentalSemanas: Number(this.ruleFormDiagnosticoGestante.edadGestacionalPrimerControlPrentalSemanas),
                fechaProbableParto: new Date(moment(this.ruleFormDiagnosticoGestante.fechaProbableParto).format('YYYY-MM-DD HH:mm:ss.sss'))
            }
            this.registroReporte(request, tabName)


        } else if (tabName === 'four') {
            //this.disabledFour = false

            console.log('entro 4', tabName)

            const request: ITratamientoMaternoChagas = {
                idTratamientoMaterno: 0,
                idAlgoritmo: 0,
                benznidazolX60Dias: Number(this.ruleFormTratamientoMaterno.benznidazolX60Dias),
                fechaInicioTratamiento: new Date(moment(this.ruleFormTratamientoMaterno.fechaInicioTratamiento).format('YYYY-MM-DD HH:mm:ss.sss')),
                nufurtimoxX60Dias: Number(this.ruleFormTratamientoMaterno.nufurtimoxX60Dias),
                idNufurtimoxControlesMedicos: Number(this.ruleFormTratamientoMaterno.nufurtimoxControlesMedicos),
                finalizacionLactanciaMaterna: Number(this.ruleFormTratamientoMaterno.finalizacionLactanciaMaterna),
                metodoAnticonceptivoUtilizadoDuranteTratamiento: this.ruleFormTratamientoMaterno.metodoAnticonceptivoUtilizadoDuranteTratamiento
            }
            this.registroReporte(request, tabName)
        } else if (tabName === 'five') {
            //this.disabledFive = false
            const request: IDiagnosticoNinoExpuestoChagas = {
                idDiagnosticoNinoExpuesto: 0,
                idGestanteControl: this.idGestanteCtrl,
                fechaNacimiento: new Date(moment(this.ruleFormDiagnosticoMenor.fechaNacimiento).format('YYYY-MM-DD HH:mm:ss.sss')),
                idExamenParasitologico: Number(this.ruleFormDiagnosticoMenor.examenParasitologico),
                resultadoExamenParasitologico: this.ruleFormDiagnosticoMenor.resultadoExamenParasitologico,
                fechaRecoleccionMuestra: new Date(moment(this.ruleFormDiagnosticoMenor.fechaRecoleccionMuestra).format('YYYY-MM-DD HH:mm:ss.sss')),
                fechaEmisiónResultado: new Date(moment(this.ruleFormDiagnosticoMenor.fechaEmisiónResultado).format('YYYY-MM-DD HH:mm:ss.sss')),
                seHacePruebaDiagnostica3Meses: Number(this.ruleFormDiagnosticoMenor.seHacePruebaDiagnostica3Meses),
                idExamenParasitologico3Meses: Number(this.ruleFormDiagnosticoMenor.examenParasitologico3Meses),
                resultadoExamenParasitologico3Meses: this.ruleFormDiagnosticoMenor.resultadoExamenParasitologico3Meses,
                fechaRecoleccionMuestra3Meses: new Date(moment(this.ruleFormDiagnosticoMenor.fechaRecoleccionMuestra3Meses).format('YYYY-MM-DD HH:mm:ss.sss')),
                fechaEmisiónResultado3Meses: new Date(moment(this.ruleFormDiagnosticoMenor.fechaEmisiónResultado3Meses).format('YYYY-MM-DD HH:mm:ss.sss')),
                seHacePrueebaDiagnosticoMolecular: Number(this.ruleFormDiagnosticoMenor.seHacePrueebaDiagnosticoMolecular),
                resultadoPCR: this.ruleFormDiagnosticoMenor.resultadoPCR,
                fechaRecolecionPCR: new Date(moment(this.ruleFormDiagnosticoMenor.fechaRecolecionPCR).format('YYYY-MM-DD HH:mm:ss.sss')),
                fechaEmisionPCR: new Date(moment(this.ruleFormDiagnosticoMenor.fechaEmisionPCR).format('YYYY-MM-DD HH:mm:ss.sss')),
                seHacePruebaDiagnostico10Meses: Number(this.ruleFormDiagnosticoMenor.seHacePruebaDiagnostico10Meses),
                esAntigenosTotales: Number(this.ruleFormDiagnosticoMenor.esAntigenosTotales),
                esAntigenosRecombinantes: Number(this.ruleFormDiagnosticoMenor.esAntigenosRecombinantes),
                resultadoPrueba: Number(this.ruleFormDiagnosticoMenor.resultadoPrueba),
                fechaRecoleccionMuestra10Meses: new Date(moment(this.ruleFormDiagnosticoMenor.fechaRecoleccionMuestra10Meses).format('YYYY-MM-DD HH:mm:ss.sss')),
                fechaEmisionResultado10Meses: new Date(moment(this.ruleFormDiagnosticoMenor.fechaEmisionResultado10Meses).format('YYYY-MM-DD HH:mm:ss.sss')),
                esCasoConfirmadoTMIChagas: Number(this.ruleFormDiagnosticoMenor.esCasoConfirmadoTMIChagas)
            }
            this.registroReporte(request, tabName)
        } else if (tabName === 'six') {
            //this.disabledSix = false
            const request: ISeguimientoNinoExpuestoChagas = {
                idSeguimientoNinoExpuesto: 0,
                idDiagnosticoNinoExpuesto: 0,
                fechaNacimiento: new Date(moment(this.ruleFormSeguimientoNinoExpuesto.fechaNacimiento).format('YYYY-MM-DD HH:mm:ss.sss')),
                idCondicionRecienNacido: Number(this.ruleFormSeguimientoNinoExpuesto.condicionRecienNacido),
                idNumeroProductosNacimiento: Number(this.ruleFormSeguimientoNinoExpuesto.numeroProductosNacimiento),
                edadGestacionalNacimientoSemanas: Number(this.ruleFormSeguimientoNinoExpuesto.edadGestacionalNacimientoSemanas),
                pesoGramos: Number(this.ruleFormSeguimientoNinoExpuesto.pesoGramos),
                idSexo: Number(this.ruleFormSeguimientoNinoExpuesto.sexo),
                idTipoParto: Number(this.ruleFormSeguimientoNinoExpuesto.tipoParto),
                idTipoRegimenSalud: Number(this.ruleFormSeguimientoNinoExpuesto.tipoRegimenSalud),
                nombreAseguradoraEAPB: this.ruleFormSeguimientoNinoExpuesto.nombreAseguradoraEAPB,
                nombresApellidos: this.ruleFormSeguimientoNinoExpuesto.nombresApellidos,
                idTipoDocumento: Number(this.ruleFormSeguimientoNinoExpuesto.tipoDocumento),
                numeroIdentificacion: this.ruleFormSeguimientoNinoExpuesto.numeroIdentificacion,
            }
            this.registroReporte(request, tabName)
        } /*else if (tabName === 'seven') {
            this.disabledSeven = false
        }*/

        //console.log(elTabComponent)
    }

    idDiagnosticoGstte = 0;
    idAlgoritmoPublic = 0;
    idDiagnosticoMenor = 0;
    idSeguimientoTratmtoNino = 0;
    async registroReporte(reporteForm: any, tabName: string) {
        console.log('primer formulario', reporteForm)
        console.log('segundo formulario', this.ruleFormAlgoritmoChagas)

        if (tabName === 'third') {
            const requestPrimerReporte = await this.ETMIPLUS_API_Client.diagnosticoEnfermedadGestante(reporteForm.idGestanteControl, reporteForm) as any;
            console.log('response', requestPrimerReporte)


            if (requestPrimerReporte.length !== 0) {
                const message = 'Diagnostico guardado con éxito.'
                this.showMessage(message).then(() => {
                    ElMessage.info(message);
                });

                this.idDiagnosticoGstte = requestPrimerReporte.data.idDiagnosticoGestante

                const requestAlgoritmo: IAlgoritmoChagas = {
                    idAlgoritmo: 0,
                    idDiagnosticoGestante: Number(this.idDiagnosticoGstte),
                    sospechaChagasAgudo: Number(this.ruleFormAlgoritmoChagas.sospechaChagasAgudo),
                    idExamenParasitologico: Number(this.ruleFormAlgoritmoChagas.examenParasitologico),
                    resultadoExamenParasitologico: this.ruleFormAlgoritmoChagas.resultadoExamenParasitologico,
                    sospechaChagasCronicoOTamizajeControlPrenatal: Number(this.ruleFormAlgoritmoChagas.sospechaChagasCronicoOTamizajeControlPrenatal),
                    resultadoPruebaTamizajeElisaAntigenosTotales: Number(this.ruleFormAlgoritmoChagas.resultadoPruebaTamizajeElisaAntigenosTotales),
                    fechaRecoleccionMuestra: new Date(moment(this.ruleFormAlgoritmoChagas.fechaRecoleccionMuestra).format('YYYY-MM-DD HH:mm:ss.sss')),
                    fechaEmisionResultado: new Date(moment(this.ruleFormAlgoritmoChagas.fechaEmisionResultado).format('YYYY-MM-DD HH:mm:ss.sss')),
                    fechaRecoleccionMuestraElisaAntigenosTotales: new Date(moment(this.ruleFormAlgoritmoChagas.fechaRecoleccionMuestraElisaAntigenosTotales).format('YYYY-MM-DD HH:mm:ss.sss')),
                    fechaEmisionResultadoElisaAntigenosTotales: new Date(moment(this.ruleFormAlgoritmoChagas.fechaEmisionResultadoElisaAntigenosTotales).format('YYYY-MM-DD HH:mm:ss.sss')),
                    resultadoPruebaTamizajeElisaAntigenosRecombinantes1: Number(this.ruleFormAlgoritmoChagas.resultadoPruebaTamizajeElisaAntigenosRecombinantes1),
                    fechaRecoleccionMuestraRecombinantes1: new Date(moment(this.ruleFormAlgoritmoChagas.fechaRecoleccionMuestraRecombinantes1).format('YYYY-MM-DD HH:mm:ss.sss')),
                    fechaEmisionResultadoRecombinantes1: new Date(moment(this.ruleFormAlgoritmoChagas.fechaEmisionResultadoRecombinantes1).format('YYYY-MM-DD HH:mm:ss.sss')),
                    resultadoPruebaTamizajeInmunocromatografia: Number(this.ruleFormAlgoritmoChagas.resultadoPruebaTamizajeInmunocromatografia),
                    fechaRecoleccionMuestraInmunocromatografia: new Date(moment(this.ruleFormAlgoritmoChagas.fechaRecoleccionMuestraInmunocromatografia).format('YYYY-MM-DD HH:mm:ss.sss')),
                    fechaEmisionInmunocromatografia: new Date(moment(this.ruleFormAlgoritmoChagas.fechaEmisionInmunocromatografia).format('YYYY-MM-DD HH:mm:ss.sss')),
                    resultadoPruebaTamizajeElisaAntigenosRecombinantes2: Number(this.ruleFormAlgoritmoChagas.resultadoPruebaTamizajeElisaAntigenosRecombinantes2),
                    fechaRecoleccionMuestraRecombinantes2: new Date(moment(this.ruleFormAlgoritmoChagas.fechaRecoleccionMuestraRecombinantes2).format('YYYY-MM-DD HH:mm:ss.sss')),
                    fechaEmisionResultadoRecombinantes2: new Date(moment(this.ruleFormAlgoritmoChagas.fechaEmisionResultadoRecombinantes2).format('YYYY-MM-DD HH:mm:ss.sss')),
                    tipoPruebaUtilizada: this.ruleFormAlgoritmoChagas.tipoPruebaUtilizada,
                    resultadoPruebaUtilizada: this.ruleFormAlgoritmoChagas.resultadoPruebaUtilizada,
                    fechaRecoleccionMuestraNoConcordante: new Date(moment(this.ruleFormAlgoritmoChagas.fechaRecoleccionMuestraNoConcordante).format('YYYY-MM-DD HH:mm:ss.sss')),
                    fechaEmisionNoConcordante: new Date(moment(this.ruleFormAlgoritmoChagas.fechaEmisionNoConcordante).format('YYYY-MM-DD HH:mm:ss.sss')),
                    resultadoPruebaTamizajeElisaAntigenosRecombinantes3: Number(this.ruleFormAlgoritmoChagas.resultadoPruebaTamizajeElisaAntigenosRecombinantes3),
                    fechaRecoleccionMuestraRecombinantes3: new Date(moment(this.ruleFormAlgoritmoChagas.fechaRecoleccionMuestraRecombinantes3).format('YYYY-MM-DD HH:mm:ss.sss')),
                    fechaEmisionResultadoRecombinantes3: new Date(moment(this.ruleFormAlgoritmoChagas.fechaEmisionResultadoRecombinantes3).format('YYYY-MM-DD HH:mm:ss.sss')),
                    esConfirmadoGestanteConChagas: Number(this.ruleFormAlgoritmoChagas.esConfirmadoGestanteConChagas),
                    esDescartadoGestanteConChagas: Number(this.ruleFormAlgoritmoChagas.esDescartadoGestanteConChagas),
                    numeroHijosDiferenteAlEmbarazoParaRealizarDiagnosticoChagas: Number(this.ruleFormAlgoritmoChagas.numeroHijosDiferenteAlEmbarazoParaRealizarDiagnosticoChagas)
                }

                console.log('algoritmo', requestAlgoritmo)

                const requestAlgoritmoGestanteChagas = await this.ETMIPLUS_API_Client.algoritmo(this.idDiagnosticoGstte, requestAlgoritmo) as any;
                console.log('response algoritmo', requestAlgoritmoGestanteChagas)

                if (requestAlgoritmoGestanteChagas.length !== 0) {
                    const message = 'Algoritmo guardado con éxito.'
                    this.showMessage(message).then(() => {
                        ElMessage.info(message);
                    });
                    console.log('id algoritmo', requestAlgoritmoGestanteChagas.data.idAlgoritmo)
                    this.idAlgoritmoPublic = requestAlgoritmoGestanteChagas.data.idAlgoritmo
                    this.disabledThree = false
                    this.activeName = tabName;
                } else {
                    this.disabledThree = false
                    this.activeName = tabName;
                }

            } else {
                const message = 'Se presentó un error. Verifiqué la información e intenté de nuevo.'
                this.showMessage(message).then(() => {
                    ElMessage.info(message);
                });
            }

        } else if (tabName === 'four') {
            reporteForm.idAlgoritmo = this.idAlgoritmoPublic;
            const requestTratamiento = await this.ETMIPLUS_API_Client.tratamientoMaterno(reporteForm.idAlgoritmo, reporteForm) as any;
            console.log('response', requestTratamiento)

            if (requestTratamiento.length !== 0) {
                const message = 'Reporte guardado con éxito.'
                this.showMessage(message).then(() => {
                    ElMessage.info(message);
                    this.activeName = tabName;
                    this.disabledFour = false
                });

            } else {
                const message = 'Se presentó un error. Verifiqué la información e intenté de nuevo.'
                this.showMessage(message).then(() => {
                    ElMessage.info(message);
                });
            }
        } else if (tabName === 'five') {
            console.log('que llega en diagnostico niño exp', reporteForm)
            const requestDiagnosticoMenor = await this.ETMIPLUS_API_Client.diagnosticoNinoExpuesto(reporteForm.idGestanteControl, reporteForm) as any;
            console.log('response', requestDiagnosticoMenor)

            this.idDiagnosticoMenor = requestDiagnosticoMenor.data.idDiagnosticoNinoExpuesto

            if (requestDiagnosticoMenor.length !== 0) {
                const message = 'Reporte guardado con éxito.'
                this.showMessage(message).then(() => {
                    ElMessage.info(message);
                    this.activeName = tabName;
                    this.disabledFive = false
                });

            } else {
                const message = 'Se presentó un error. Verifiqué la información e intenté de nuevo.'
                this.showMessage(message).then(() => {
                    ElMessage.info(message);
                });
            }
        } else if (tabName === 'six') {
            reporteForm.idDiagnosticoNinoExpuesto = this.idDiagnosticoMenor
            const requestSeguimiento = await this.ETMIPLUS_API_Client.seguimientoNinoExpuestoChagas(reporteForm.idDiagnosticoNinoExpuesto, reporteForm) as any;
            console.log('response', requestSeguimiento)

            if (requestSeguimiento.length !== 0) {
                const message = 'Reporte guardado con éxito.'
                this.showMessage(message).then(() => {
                    ElMessage.info(message);
                    this.activeName = tabName;
                    this.disabledSix = false
                });

                this.idSeguimientoTratmtoNino = requestSeguimiento.data.idSeguimientoNinoExpuesto;

            } else {
                const message = 'Se presentó un error. Verifiqué la información e intenté de nuevo.'
                this.showMessage(message).then(() => {
                    ElMessage.info(message);
                });
            }
        } else if (tabName === 'end') {
            console.log('id seguimiento', this.idSeguimientoTratmtoNino)
            reporteForm.idSeguimientoNinoExpuesto = this.idSeguimientoTratmtoNino
            console.log('formulario a enviar', reporteForm)
            const requestSeguimiento = await this.ETMIPLUS_API_Client.tratamientoSeguimientoNino(this.idSeguimientoTratmtoNino, reporteForm) as any;
            console.log('response', requestSeguimiento)

            if (requestSeguimiento.length !== 0) {
                const message = 'Reporte guardado con éxito.'
                this.showMessage(message).then(() => {
                    ElMessage.info(message);
                    /*this.activeName = tabName;
                    this.disabledSix = false*/
                });

                //this.idSeguimientoTratmtoNino = requestSeguimiento.data.idSeguimientoNinoExpuesto;

            } else {
                const message = 'Se presentó un error. Verifiqué la información e intenté de nuevo.'
                this.showMessage(message).then(() => {
                    ElMessage.info(message);
                });
            }
        }
    }

    showMessage(message: string) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(message);
            }, 1000);
        });
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
        fechaRecoleccionMuestraElisaAntigenosTotales: new Date(),
        fechaEmisionResultadoElisaAntigenosTotales: new Date(),
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

    ruleFormTratamientoMaterno = reactive<ITratamientoMaternoChagas>({
        benznidazolX60Dias: 0,
        fechaInicioTratamiento: new Date(),
        nufurtimoxX60Dias: 0,
        idNufurtimoxControlesMedicos: 0,
        nufurtimoxControlesMedicos: [] as any[],
        finalizacionLactanciaMaterna: 0,
        metodoAnticonceptivoUtilizadoDuranteTratamiento: '',
    })

    ruleFormDiagnosticoMenor = reactive<IDiagnosticoNinoExpuestoChagas>({
        fechaNacimiento: new Date(),
        examenParasitologico: {} as any,
        resultadoExamenParasitologico: '',
        fechaRecoleccionMuestra: new Date(),
        fechaEmisiónResultado: new Date(),
        seHacePruebaDiagnostica3Meses: 0,
        examenParasitologico3Meses: {} as any,
        resultadoExamenParasitologico3Meses: '',
        fechaRecoleccionMuestra3Meses: new Date(),
        fechaEmisiónResultado3Meses: new Date(),
        seHacePrueebaDiagnosticoMolecular: 0,
        resultadoPCR: '',
        fechaRecolecionPCR: new Date(),
        fechaEmisionPCR: new Date(),
        seHacePruebaDiagnostico10Meses: 0,
        esAntigenosTotales: 0,
        esAntigenosRecombinantes: 0,
        resultadoPrueba: 0,
        fechaRecoleccionMuestra10Meses: new Date(),
        fechaEmisionResultado10Meses: new Date(),
        esCasoConfirmadoTMIChagas: 0,
    })

    ruleFormSeguimientoNinoExpuesto = reactive<ISeguimientoNinoExpuestoChagas>({
        fechaNacimiento: new Date(),
        condicionRecienNacido: [] as any,
        numeroProductosNacimiento: [] as any,
        edadGestacionalNacimientoSemanas: 0,
        pesoGramos: 0,
        sexo: [] as any,
        tipoParto: [] as any,
        tipoRegimenSalud: [] as any,
        nombreAseguradoraEAPB: '',
        nombresApellidos: '',
        tipoDocumento: [] as any,
        numeroIdentificacion: '',
    })

    ruleFormTratamientoSeguimientoNino = reactive<ITratamientoSeguimientoNinoChagas>({
        benznidazolX60Dias: 0,
        fechaInicioTratamiento: new Date(),
        nufurtimoxX60Dias: 0,
        nufurtimoxControlesMedicos: {} as any,
        esAntigenosTotales6Meses: 0,
        esAntigenosRecombinantes6Meses: 0,
        resultadoPruebaSerologica6Meses: '',
        esAntigenosTotales12Meses: 0,
        esAntigenosRecombinantes12Meses: 0,
        resultadoPruebaSerologica12Meses: '',
        esNinoCuradoChagas: 0,
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
        fechaRecoleccionMuestraElisaAntigenosTotales: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        fechaEmisionResultadoElisaAntigenosTotales: [
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

    rulesFormTratamientoMaterno = reactive<FormRules<ITratamientoMaternoChagas>>({
        benznidazolX60Dias: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        fechaInicioTratamiento: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        nufurtimoxX60Dias: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        nufurtimoxControlesMedicos: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        finalizacionLactanciaMaterna: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        metodoAnticonceptivoUtilizadoDuranteTratamiento: [
            { required: true, message: 'Este campo es requerido', trigger: 'blur' }
        ]
    })

    rulesFormSeguimientoNinoExpuesto = reactive<FormRules<ITratamientoMaternoChagas>>({
        /*fechaInicioTratamiento: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        condicionRecienNacido: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        numeroProductosNacimiento: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        edadGestacionalNacimientoSemanas: [
            { required: true, message: 'Este campo es requerido', trigger: 'blur' }
        ],
        pesoGramos: [
            { required: true, message: 'Este campo es requerido', trigger: 'blur' }
        ],
        sexo: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        tipoParto: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        tipoRegimenSalud: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        nombreAseguradoraEAPB: [
            { required: true, message: 'Este campo es requerido', trigger: 'blur' }
        ],
        nombresApellidos: [
            { required: true, message: 'Este campo es requerido', trigger: 'blur' }
        ],
        tipoDocumento: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        numeroIdentificacion: [
            { required: true, message: 'Este campo es requerido', trigger: 'blur' }
        ]*/
    })

    rulesFormDiagnosticoMenor = reactive<FormRules<IDiagnosticoNinoExpuestoChagas>>({
        fechaNacimiento: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        examenParasitologico: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        resultadoExamenParasitologico: [
            { required: true, message: 'Este campo es requerido', trigger: 'blur' }
        ],
        fechaRecoleccionMuestra: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        fechaEmisiónResultado: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        examenParasitologico3Meses: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        seHacePruebaDiagnostica3Meses: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        resultadoExamenParasitologico3Meses: [
            { required: true, message: 'Este campo es requerido', trigger: 'blur' }
        ],
        fechaRecoleccionMuestra3Meses: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        fechaEmisiónResultado3Meses: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        seHacePrueebaDiagnosticoMolecular: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        resultadoPCR: [
            { required: true, message: 'Este campo es requerido', trigger: 'blur' }
        ],
        fechaRecolecionPCR: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        fechaEmisionPCR: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        seHacePruebaDiagnostico10Meses: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        esAntigenosTotales: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        esAntigenosRecombinantes: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        resultadoPrueba: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        fechaRecoleccionMuestra10Meses: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        fechaEmisionResultado10Meses: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        esCasoConfirmadoTMIChagas: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ]
    })

    rulesFormTratamientoSeguimientoNino = reactive<FormRules<ITratamientoSeguimientoNinoChagas>>({
        benznidazolX60Dias: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        fechaInicioTratamiento: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        nufurtimoxX60Dias: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        nufurtimoxControlesMedicos: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        esAntigenosTotales6Meses: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        esAntigenosRecombinantes6Meses: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        resultadoPruebaSerologica6Meses: [
            { required: true, message: 'Este campo es requerido', trigger: 'blur' }
        ],
        esAntigenosTotales12Meses: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        esAntigenosRecombinantes12Meses: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        resultadoPruebaSerologica12Meses: [
            { required: true, message: 'Este campo es requerido', trigger: 'blur' }
        ],
        esNinoCuradoChagas: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
    })

    submitForm = async (formEl: FormInstance | undefined, tab: string) => {
        if (!formEl) return
        await formEl.validate((valid, fields) => {
            if (valid) {

                console.log('enviando!')
                if (tab !== 'end') {
                    //console.log(fields)
                    this.changeTab(tab)
                } else {
                    console.log('valor a guardar', Number(this.idGestanteCtrl))

                    const request: ITratamientoSeguimientoNinoChagas = {
                        idTratamientoSeguimientoNino: 0,
                        idSeguimientoNinoExpuesto: this.idSeguimientoTratmtoNino,
                        benznidazolX60Dias: Number(this.ruleFormTratamientoSeguimientoNino.benznidazolX60Dias ? 1 : 0),
                        fechaInicioTratamiento: new Date(moment(this.ruleFormTratamientoSeguimientoNino.fechaInicioTratamiento).format('YYYY-MM-DD HH:mm:ss.sss')),
                        nufurtimoxX60Dias: Number(this.ruleFormTratamientoSeguimientoNino.nufurtimoxX60Dias ? 1 : 0),
                        idNufurtimoxControlesMedicos: Number(this.ruleFormTratamientoSeguimientoNino.nufurtimoxControlesMedicos),
                        esAntigenosTotales6Meses: Number(this.ruleFormTratamientoSeguimientoNino.esAntigenosTotales6Meses ? 1 : 0),
                        esAntigenosRecombinantes6Meses: Number(this.ruleFormTratamientoSeguimientoNino.esAntigenosRecombinantes6Meses ? 1 : 0),
                        resultadoPruebaSerologica6Meses: this.ruleFormTratamientoSeguimientoNino.resultadoPruebaSerologica6Meses,
                        esAntigenosTotales12Meses: Number(this.ruleFormTratamientoSeguimientoNino.esAntigenosTotales12Meses ? 1 : 0),
                        esAntigenosRecombinantes12Meses: Number(this.ruleFormTratamientoSeguimientoNino.esAntigenosRecombinantes12Meses ? 1 : 0),
                        resultadoPruebaSerologica12Meses: this.ruleFormTratamientoSeguimientoNino.resultadoPruebaSerologica12Meses,
                        esNinoCuradoChagas: Number(this.ruleFormTratamientoSeguimientoNino.esNinoCuradoChagas),
                    }
                    this.registroReporte(request, 'end')

                }
            }
            else {
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

.w-100 .el-form-item__content,
.w-100 .el-select,
.w-100 .select-trigger {
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

.el-collapse-item {
    margin-bottom: 14px
}

.el-collapse-item__header {
    font-weight: bold !important;
    background-color: #f1f1f1 !important;
    font-size: 14px !important;
    padding: 0 0 0 13px !important;
}

.el-collapse-item__content {
    padding-top: 25px;
    padding-left: 13px;
    padding-right: 13px;
    background-color: #f7f7f7 !important;
}

.el-tabs__nav-wrap{
    display: flex;
    align-items: center;
}
</style>