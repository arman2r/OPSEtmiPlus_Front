<template class="steps-container">
    <el-row style="align-content: start;">
        <h4>SEGUIMIENTO CLÍNICO DE LA GESTANTE CON ENFERMEDAD DE CHAGAS</h4>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="mb">
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
                                            <el-radio :label="0">Aplica</el-radio>
                                            <el-radio :label="1">No Aplica</el-radio>
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
                    <el-form :model="ruleFormTratamientoMaterno" :rules="rulesFormTratamientoMaterno" style="width: 100%;" label-position="top" :size="formSize" status-icon ref="thirdForm">
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
                <el-tab-pane label="Datos demograficos" name="four" ref="elTab4">
                    <el-form style="width: 100%;" label-top="top" :size="formSize" status-icon ref="fourForm">
                        <section style="width: 100%;">
                            <el-row :gutter="10" style="width: 100%;">
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Fecha de
                                        nacimiento" prop="edad">
                                        <el-date-picker type="date" placeholder="Fecha de nacimiento"
                                            :format="dateFormat" />
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
                                    <el-form-item label="Tipo de regimen de salud" prop="tipoRegimenSalud" class="w-100">
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
                                    <el-form-item label="Tipo de Documento" prop="tipoDocumento" class="w-100">
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
                <el-tab-pane label="Diagnostico" name="five" ref="elTab5">
                    <el-form style="width: 100%;" label-position="top" :size="formSize" status-icon ref="fiveForm">
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
                                                                <el-input type="number" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="align-end">
                                                            <el-checkbox label="Frotis o extendido a partir de sangre"
                                                                size="large" border />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="align-end">
                                                            <el-checkbox label="Microhematocrito" size="large" border />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="align-end">
                                                            <el-checkbox label="Método de strout" size="large" border />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="align-end">
                                                            <el-checkbox label="Micrométodo" size="large" border />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de recolección de muestra</label>
                                                            <el-date-picker style="margin-bottom:8px" type="date"
                                                                placeholder="Fecha de recolección de muestra"
                                                                :format="dateFormat" />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de emisión del resultado</label>
                                                            <el-date-picker style="margin-bottom:8px" type="date"
                                                                placeholder="Fecha de emisión del resultado"
                                                                :format="dateFormat" />
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
                                                                <el-input type="number" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="align-end">
                                                            <el-checkbox label="Frotis o extendido a partir de sangre"
                                                                size="large" border />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="align-end">
                                                            <el-checkbox label="Microhematocrito" size="large" border />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="align-end">
                                                            <el-checkbox label="Método de strout" size="large" border />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
                                                            class="align-end">
                                                            <el-checkbox label="Micrométodo" size="large" border />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                                            <el-form-item label="RESULTADO">
                                                                <el-input type="number" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de recolección de muestra</label>
                                                            <el-date-picker style="margin-bottom:8px" type="date"
                                                                placeholder="Fecha de recolección de muestra"
                                                                :format="dateFormat" />
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            style="align-items:end">
                                                            <label class="title-field"
                                                                style="min-width: 180px !important;width:inherit !important">Fecha
                                                                de emisión del resultado</label>
                                                            <el-date-picker style="margin-bottom:8px" type="date"
                                                                placeholder="Fecha de emisión del resultado"
                                                                :format="dateFormat" />
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
                                                            style="align-items:end">
                                                            <el-form-item label="Reacción
                                                                en cadena polimerasa (PCR)">
                                                                <el-input placeholder="RESULTADO" type="number" />
                                                            </el-form-item>
                                                        </el-col>

                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            style="align-items:end">
                                                            <el-form-item label="Fecha
                                                                de recolección de muestra">
                                                                <el-date-picker style="margin-bottom:8px" type="date"
                                                                    placeholder="Reacción
                                                                en cadena polimerasa (PCR)" :format="dateFormat" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            style="align-items:end">
                                                            <el-form-item label="Fecha
                                                                de emisión del resultado">
                                                                <el-date-picker style="margin-bottom:8px" type="date"
                                                                    placeholder="Fecha de emisión del resultado"
                                                                    :format="dateFormat" />
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
                                                                <el-input type="number" />
                                                            </el-form-item>
                                                        </el-col>

                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            style="align-items:end">
                                                            <el-form-item label="Fecha
                                                                de recolección de muestra">
                                                                <el-date-picker style="margin-bottom:8px" type="date"
                                                                    placeholder="Fecha de recolección de muestra"
                                                                    :format="dateFormat" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            style="align-items:end">
                                                            <el-form-item label="Fecha
                                                                de emisión del resultado">
                                                                <el-date-picker style="margin-bottom:8px" type="date"
                                                                    placeholder="Fecha de emisión del resultado"
                                                                    :format="dateFormat" />
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
                <el-tab-pane label="Tratamiento del menor" name="six" ref="elTab6">
                    <el-form style="width: 100%;" label-position="top" :size="formSize" status-icon ref="sixForm">
                        <section style="width: 100%;">
                            <el-row :gutter="10" style="width: 100%;">
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <h4 class="align-start">TRATAMIENTO Y SEGUIMIENTO DEL NIÑO O NIÑA CONFIRMADO CON
                                        ENFERMEDAD DE CHAGAS CONGENITO</h4>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Medicamento suministrado" prop="tipoDocumento" class="w-100">
                                        <el-select placeholder="Medicamento suministrado">
                                            <el-option label="Benznidazol" value="1" />
                                            <el-option label="Nufurtimox" value="2" />
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" style="align-items:end">
                                    <el-form-item label="Fecha de inicio del tratamiento" prop="tipoDocumento"
                                        class="w-100">
                                        <el-date-picker style="margin-bottom:8px" type="date" placeholder="Fecha de emisión"
                                            :format="dateFormat" />
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
                                                                <el-input type="number" />
                                                            </el-form-item>
                                                        </el-col>

                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            style="align-items:end">
                                                            <el-form-item label="Fecha de recolección de muestra"
                                                                prop="tipoDocumento" class="w-100">
                                                                <el-date-picker style="margin-bottom:8px" type="date"
                                                                    placeholder="Fecha de recolección de muestra"
                                                                    :format="dateFormat" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            style="align-items:end">
                                                            <el-form-item label="Fecha de emisión del resultado"
                                                                prop="tipoDocumento" class="w-100">
                                                                <el-date-picker style="margin-bottom:8px" type="date"
                                                                    placeholder="Fecha de emisión del resultado"
                                                                    :format="dateFormat" />
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
                                                            style="align-items:end">
                                                            <el-form-item label="Fecha
                                                                de recolección de muestra" prop="tipoDocumento"
                                                                class="w-100">
                                                                <el-date-picker style="margin-bottom:8px" type="date"
                                                                    placeholder="Fecha de recolección de muestra"
                                                                    :format="dateFormat" />
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                                            style="align-items:end">
                                                            <el-form-item label="Fecha
                                                                de emisión del resultado" prop="tipoDocumento"
                                                                class="w-100">
                                                                <el-date-picker style="margin-bottom:8px" type="date"
                                                                    placeholder="Fecha de emisión del resultado"
                                                                    :format="dateFormat" />
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
import { ElMessage, ElMessageBox } from 'element-plus'
import type { TabsPaneContext, ElForm } from 'element-plus'
import type { CheckboxValueType } from 'element-plus'
import { RuleFormDatosGestante, RuleFormPrimerReporte, RuleFormSegundoReporte, RuleFormTercerReporte, RuleFormCuartoReporte, RuleFormquintoReporte, RuleFormSeguimiento } from '@/interfaces/modeloVih'
import { RuleFormHbDatosGestante, DiagnosticoFormHb, TratamientoFormHb } from '@/interfaces/modeloHb'
import { IDiagnosticoEnfermedadGestanteChagas, IAlgoritmoChagas, IParametrica, ITratamientoMaternoChagas } from "@/api/ETMIPLUS_API";
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
        const tabName = tab.props.name as string;
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
        //this.getAllFicha(this.idGestanteCtrl)

    }

    condicionMomentoDiagnosticoList: IParametrica[] = []
    nufurtimoxCtrlMedico: IParametrica[] = []

    async getParamsDbFirsTap(step: string) {
        if (step === 'two') {
            const getParamsDiagnosticMoment = await this.ETMIPLUS_API_Client.parametrica2('MOMENTO_DIAGNOSTICO_CHAGAS') as any;
            console.log('que trae 1', getParamsDiagnosticMoment)
            this.condicionMomentoDiagnosticoList = getParamsDiagnosticMoment.data

        } else if (step === 'third') {
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
            this.disabledFive = false
        } else if (tabName === 'six') {
            this.disabledSix = false
        } else if (tabName === 'seven') {
            this.disabledSeven = false
        }

        //console.log(elTabComponent)
    }

    idDiagnosticoGstte = 0;
    idAlgoritmoPublic = 0;
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
            console.log('que llega en form', reporteForm)
            console.log('que id algoritmo llega', this.idAlgoritmoPublic)
            reporteForm.idAlgoritmo = this.idAlgoritmoPublic;
            const requestTratamiento = await this.ETMIPLUS_API_Client.tratamientoMaterno(reporteForm.idAlgoritmo, reporteForm) as any;
            console.log('response', requestTratamiento)

            if (requestTratamiento.length !== 0) {
                const message = 'Reporte guardado con éxito.'
                this.showMessage(message).then(() => {
                    ElMessage.info(message);
                    this.activeName = tabName;
                    this.disabledThree = false
                });

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
        nufurtimoxControlesMedicos: [] as IParametrica[],
        finalizacionLactanciaMaterna: 0,
        metodoAnticonceptivoUtilizadoDuranteTratamiento: '',
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

                    /*const request: IReporteBinomio = {
                        idGestante: Number(this.idGestanteCtrl),
                        nombreIPSAtencionVIH: this.ruleFormSeguimiento.nombreIPSAtencionVIH,
                        nombreRemitenteInformacion: this.ruleFormSeguimiento.nombreRemitenteInformacion,
                        cargoRemitenteInformacion: this.ruleFormSeguimiento.cargoRemitenteInformacion,
                        telefonoRemitenteInformacion: this.ruleFormSeguimiento.telefonoRemitenteInformacion,
                        correoRemitenteInformacion1: this.ruleFormSeguimiento.correoRemitenteInformacion1,
                        correoRemitenteInformacion2: this.ruleFormSeguimiento.correoRemitenteInformacion2
                    }
                    this.registroReporte(request, 'end')*/

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
</style>