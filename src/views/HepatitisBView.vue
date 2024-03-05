<template class="steps-container">
    <div class="w-100">
        <section class="w-100">
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">

                <el-tab-pane label="Diagnostico" name="two" ref="elTab2">

                    <el-form :model="ruleFormHbDiagnosticoHb" :rules="rulesDiagnosticoHb" style="width: 100%;"
                        label-width="180px" :size="formSize" status-icon ref="secondForm" label-position="top">
                        <section style="width: 100%;">
                            <el-row :gutter="10" style="width: 100%;">

                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <h5 class="align-start">DIAGNÓSTICO DE HEPATITIS B EN LA GESTANTE</h5>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
                                    <el-form-item label="Momento del diagnostico, con relación al embarazo actual:"
                                        prop="momentoDiagnostico" class="select-width">
                                        <el-select v-model="ruleFormHbDiagnosticoHb.momentoDiagnostico"
                                            placeholder="Momento del diagnostico">
                                            <el-option v-for="(mmd, index) in momentoDiagnosticoList" :key="index"
                                                :label="mmd.valor" :value="mmd.id" />
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
                                    <el-form-item label="Edad gestacional al momento del diagnostico, en semanas:"
                                        prop="edadGestacionalAlNacimientoEnSemana">
                                        <el-input v-model="ruleFormHbDiagnosticoHb.edadGestacional" type="number" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
                                    <el-form-item label="Antígeno de superficie de HB Reactivo (HBsAg)."
                                        prop="fechaResultadoReactivo" class="select-width w-100">
                                        <el-date-picker v-model="ruleFormHbDiagnosticoHb.fechaResultadoReactivo" type="date"
                                            placeholder="Fecha probable del parto" :format="dateFormat" :size="size" />
                                    </el-form-item>
                                </el-col>

                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <h5 class="align-start">Realización de Anticuerpos IgM contra el antígeno core de HB
                                        (anti-HBc
                                        IgM):</h5>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Resultado" prop="resultadoAntiHBcIgM" class="select-width w-100">
                                        <el-radio-group v-model="ruleFormHbDiagnosticoHb.resultadoAntiHBcIgM">
                                            <el-radio :label="1">Reactivo</el-radio>
                                            <el-radio :label="0">No Reactivo</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" style="align-items:end">
                                    <el-form-item label="Fecha del resultado" prop="fechaResultadoAntiHBcIgM"
                                        class="select-width w-100">
                                        <el-date-picker style="margin-bottom:8px"
                                            v-model="ruleFormHbDiagnosticoHb.fechaResultadoAntiHBcIgM" type="date"
                                            placeholder="Fecha del resultado" :format="dateFormat" :size="size" />
                                    </el-form-item>
                                </el-col>

                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <h5 class="align-start">Realización de Anticuerpos totales contra el antígeno core de HB
                                        (anti-HBc total o IgG):</h5>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Resultado:" prop="resultadoAntiHBcTotalOlgG"
                                        class="select-width w-100">
                                        <el-radio-group v-model="ruleFormHbDiagnosticoHb.resultadoAntiHBcTotalOlgG">
                                            <el-radio :label="1">Reactivo</el-radio>
                                            <el-radio :label="0">No Reactivo</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" style="align-items:end">
                                    <el-form-item label="Fecha probable del parto" prop="fechaResultadoAntiHBcTotalOlgG"
                                        class="select-width w-100">
                                        <el-date-picker style="margin-bottom:8px"
                                            v-model="ruleFormHbDiagnosticoHb.fechaResultadoAntiHBcTotalOlgG" type="date"
                                            placeholder="Fecha probable del parto" :format="dateFormat" :size="size" />
                                    </el-form-item>
                                </el-col>

                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <h5 class="align-start">Realización de Antígeno e de HB (HBeAg):</h5>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Resultado:" prop="resultadoAntiHBeAg" class="select-width w-100">
                                        <el-radio-group v-model="ruleFormHbDiagnosticoHb.resultadoAntiHBeAg">
                                            <el-radio :label="0">Reactivo</el-radio>
                                            <el-radio :label="1">No Reactivo</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" style="align-items:end">
                                    <el-form-item label="Resultado:" prop="fechaResultadoAntiHBeAg"
                                        class="select-width w-100">
                                        <el-date-picker style="margin-bottom:8px"
                                            v-model="ruleFormHbDiagnosticoHb.fechaResultadoAntiHBeAg" type="date"
                                            placeholder="Fecha probable del parto" :format="dateFormat" :size="size" />
                                    </el-form-item>
                                </el-col>

                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <h5 class="align-start" style="margin-bottom:0">Realización de Carga viral para
                                        Hepatitis
                                        B:</h5>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Valor unidades internacionales/Ml"
                                        prop="resultadoAntigenoCargaViral">
                                        <el-input v-model="ruleFormHbDiagnosticoHb.resultadoAntigenoCargaViral"
                                            type="number" step="1" placeholder="Resultado" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Fecha probable del parto" prop="fechaResultadoCargaViral">
                                        <el-date-picker style="margin-bottom:8px"
                                            v-model="ruleFormHbDiagnosticoHb.fechaResultadoCargaViral" type="date"
                                            placeholder="Fecha probable del parto" :format="dateFormat" :size="size" />
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
                <el-tab-pane label="Tratamiento y seguimiento" name="three" ref="elTab3">

                    <el-form :model="ruleFormHbTratamiento" :rules="ruleSFormHbTratamiento" style="width: 100%;"
                        :size="formSize" status-icon ref="thirdForm" label-position="top">
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
                                    <el-form-item label="La gestante venia recibiendo tratamiento para HB antes de iniciar el
                                embarazo actual:" prop="recibioTratamientoAntesEmbarazoActual">
                                        <el-radio-group
                                            v-model="ruleFormHbTratamiento.recibioTratamientoAntesEmbarazoActual">
                                            <el-radio :label="1">Si</el-radio>
                                            <el-radio :label="0">No</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="¿La gestante requiere tratamiento para HB durante el embarazo
                                actual?:" prop="requiereTratamientoAntesEmbarazoActual">
                                        <el-radio-group
                                            v-model="ruleFormHbTratamiento.requiereTratamientoAntesEmbarazoActual">
                                            <el-radio :label="1">Si</el-radio>
                                            <el-radio :label="0">No</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="A partir de que semana gestacional lo recibió:"
                                        prop="edadGestacionalRecibioTratamientoAntesSemana">
                                        <el-input
                                            v-model="ruleFormHbTratamiento.edadGestacionalRecibioTratamientoAntesSemana"
                                            type="number" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <h5 class="align-start">Gestante con diágnostico de hepatitis B <span
                                            style="color:#ff4500">DURANTE</span> el embarazo
                                        actual:</h5>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="¿Requiere tratamiento para HB durante el embarazo actual?:"
                                        prop="requiereTratamientoDuranteEmbarazoActual">
                                        <el-radio-group
                                            v-model="ruleFormHbTratamiento.requiereTratamientoDuranteEmbarazoActual">
                                            <el-radio :label="1">Si</el-radio>
                                            <el-radio :label="0">No</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="A partir de que semana gestacional lo recibió:"
                                        prop="edadGestacionalRecibioTratamientoDuranteSemana">
                                        <el-input
                                            v-model="ruleFormHbTratamiento.edadGestacionalRecibioTratamientoDuranteSemana"
                                            type="number" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-row>
                                        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                            <el-form-item label="Nombre del medicamento
                                        suministrado a la gestante para el tratamiento de la HB:"
                                                prop="nombreMedicamentoTratamiento">
                                                <el-input v-model="ruleFormHbTratamiento.nombreMedicamentoTratamiento" />
                                            </el-form-item>
                                        </el-col>
                                    </el-row>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
                                    style="align-items:center;display:flex">
                                    <el-form-item label="Situación de la gestante con relación al embarazo actual:"
                                        prop="situacionGestante" class="select-width">
                                        <el-select v-model="ruleFormHbTratamiento.situacionGestante"
                                            placeholder="Situación de la gestante">
                                            <el-option v-for="(sg, index) in situacionGestanteList" :key="index"
                                                :label="sg.valor" :value="sg.id" />
                                        </el-select>
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
                <el-tab-pane label="Seguimiento del menor expuesto" name="four" ref="elTab4">

                    <el-form :model="ruleFormHbSeguimientoMenorExp" :rules="rulesFormHbSeguimientoMenorExp"
                        style="width: 100%;" :size="formSize" status-icon ref="fourForm" label-position="top">
                        <section style="width: 100%;">
                            <el-row :gutter="10" style="width: 100%;">

                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <h4 class="align-start">Seguimiento del niño o niña expuesto al virus de la hepatitis B
                                    </h4>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="column-custom mb">
                                    <el-form-item label="Condición del recien nacido:" prop="condicionRecienNacido"
                                        class="select-width w-100">
                                        <el-select v-model="ruleFormHbSeguimientoMenorExp.condicionRecienNacido"
                                            placeholder="Condición del recien nacido:">
                                            <el-option v-for="(crn, index) in condicionRecienNacidoList" :key="index"
                                                :label="crn.valor" :value="crn.id" />
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="mb">
                                    <el-form-item label="Edad gestacional al nacimiento, en semanas:"
                                        prop="edadGestacionalNacimientoSemanas">
                                        <el-input type="number"
                                            v-model="ruleFormHbSeguimientoMenorExp.edadGestacionalNacimientoSemanas" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="column-custom mb">
                                    <el-form-item label="Tipo de parto:" prop="tipoParto" class="select-width w-100">
                                        <el-select v-model="ruleFormHbSeguimientoMenorExp.tipoParto"
                                            placeholder="Tipo de parto:">
                                            <el-option v-for="(tp, index) in tipoPartoList" :key="index" :label="tp.valor"
                                                :value="tp.id" />
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="column-custom mb">
                                    <el-form-item label="Número de productos al nacimiento:"
                                        prop="numeroProductosNacimiento" class="select-width w-100">
                                        <el-select v-model="ruleFormHbSeguimientoMenorExp.numeroProductosNacimiento"
                                            placeholder="Número de productos al nacimiento:">
                                            <el-option v-for="(npn, index) in numeroProductosNacimientoList" :key="index"
                                                :label="npn.valor" :value="npn.id" />
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                    <el-form-item label="Fecha del parto:" class="select-width" prop="fechaParto">
                                        <el-date-picker type="date" placeholder="Fecha del parto"
                                            v-model="ruleFormHbSeguimientoMenorExp.fechaParto" :format="dateFormat"
                                            :size="size" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="column-custom mb">
                                    <el-form-item label="Sexo:" prop="sexo" class="select-width w-100">
                                        <el-select v-model="ruleFormHbSeguimientoMenorExp.sexo" placeholder="Sexo:">
                                            <el-option v-for="(sxo, index) in sexoList" :key="index" :label="sxo.valor"
                                                :value="sxo.id" />
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Tipo de regimen en salud:" prop="tipoRegimenSalud"
                                        class="select-width">
                                        <el-select v-model="ruleFormHbSeguimientoMenorExp.tipoRegimenSalud"
                                            placeholder="Tipo de regimen en salud:">
                                            <el-option v-for="(trs, index) in tipoRegimenSaludList" :key="index"
                                                :label="trs.valor" :value="trs.id" />
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Nombre aseguradora (EAPB)" prop="nombreAseguradora">
                                        <el-input v-model="ruleFormHbSeguimientoMenorExp.nombreAseguradora" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Nombres y Apellidos" prop="nombresApellidos">
                                        <el-input v-model="ruleFormHbSeguimientoMenorExp.nombresApellidos" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Tipo de Documento:" prop="tipoDocumento" class="select-width">
                                        <el-select v-model="ruleFormHbSeguimientoMenorExp.tipoDocumento"
                                            placeholder="Tipo de Documento:">
                                            <el-option v-for="(td, index) in tipoDocumentoList" :key="index"
                                                :label="td.valor" :value="td.id" />
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Número de identificación" prop="numeroIdentificacion">
                                        <el-input v-model="ruleFormHbSeguimientoMenorExp.numeroIdentificacion"
                                            type="number" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Aplicacion de la dosis de vacuna contra HB al recién nacido:"
                                        prop="aplicaronDosisVacunaRecienNacido">
                                        <el-radio-group
                                            v-model="ruleFormHbSeguimientoMenorExp.aplicaronDosisVacunaRecienNacido"
                                            @change="toggleEnableBoolean1">
                                            <el-radio :label="1">Si</el-radio>
                                            <el-radio :label="0">No</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Su aplicacion se hizo en que tiempo" prop="tiempoAplicacionVacuna"
                                        class="select-width">
                                        <el-select :disabled="enableaplicaronDosisVacunaRecienNacido"
                                            v-model="ruleFormHbSeguimientoMenorExp.tiempoAplicacionVacuna"
                                            placeholder="Su aplicacion se hizo en que tiempo">
                                            <el-option v-for="(tav, index) in tiempoAplicacionVacunaList" :key="index"
                                                :label="tav.valor" :value="tav.id" />
                                        </el-select>

                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Aplicacion de la Inmunoglobina para HB al recién nacido:"
                                        prop="aplicaronInmunoglobulinaRecienNacido">
                                        <el-radio-group
                                            v-model="ruleFormHbSeguimientoMenorExp.aplicaronInmunoglobulinaRecienNacido"
                                            @change="toggleEnableBoolean2">
                                            <el-radio :label="1">Si</el-radio>
                                            <el-radio :label="0">No</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Su aplicacion se hizo en que tiempo"
                                        prop="tiempoAplicacionInmonoglobulina" class="select-width">
                                        <el-select :disabled="enableInmunoglobinaHbRecienNacido"
                                            v-model="ruleFormHbSeguimientoMenorExp.tiempoAplicacionInmonoglobulina"
                                            placeholder="Su aplicacion se hizo en que tiempo">
                                            <el-option v-for="(taiv, index) in tiempoAplicacionInmonoglobulinaList"
                                                :key="index" :label="taiv.valor" :value="taiv.id" />
                                        </el-select>

                                    </el-form-item>
                                </el-col>


                                <div v-for="(vs, index) in vacunaSeguimiento" :key="index" class="w-100 no-margin el-row">
                                    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                        <el-form-item label="Examen" :prop="dosisVacuna" class="select-width">
                                            <el-select v-model="vs.dosisVacuna" placeholder="Exámenes paraclínicos"
                                                @change="validateField(index)">
                                                <el-option v-for="(pcm, index) in dosisVacunaList" :key="index"
                                                    :label="pcm.valor" :value="pcm.id" />
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="column-custom">
                                        <el-form-item label="Fecha de aplicacion:" :prop="fechaAplicacion" class="w-100">
                                            <el-date-picker v-model="vs.fechaAplicacion" @change="validateField(index)"
                                                type="date" placeholder="Fecha de aplicacion:" :format="dateFormat" />
                                        </el-form-item>
                                    </el-col>
                                </div>
                                <el-col :span="24">
                                    <el-button type="primary" size="default" @click="addFields"
                                        :disabled="validarVacunaSeguimiento">
                                        Agregar Vacuna
                                    </el-button>
                                </el-col>
                            </el-row>
                            <el-row class="row-bg" justify="end">
                                <div class="btn-save">
                                    <el-button type="primary" size="default" @click="submitForm(fourForm, 'five')">guardar y
                                        continuar</el-button>
                                </div>
                            </el-row>
                        </section>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="Clasificación" name="five" ref="elTab5">

                    <el-form :model="ruleFormHbClasificacion" :rules="rulesFormHbClasificacion" style="width: 100%;"
                        label-width="180px" :size="formSize" status-icon ref="fiveForm" label-position="top">
                        <section style="width: 100%;">
                            <el-row :gutter="10" style="width: 100%;">

                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <h4 class="align-start">clasificación del niño o niña expuesto frente virus de la
                                        hepatis B</h4>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" style="text-align:left">
                                    <el-form-item label="Realización de antigeno de superficie de la HB (HBs Ag):"
                                        prop="resultadoAntiHBsAg" class="select-width">
                                        <el-radio-group v-model="ruleFormHbClasificacion.resultadoAntiHBsAg">
                                            <el-radio :label="1">Reactivo</el-radio>
                                            <el-radio :label="0">No Reactivo</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Fecha de resultado:" prop="fechaResultadoAntiHBsAg"
                                        class="select-width">
                                        <el-date-picker v-model="ruleFormHbClasificacion.fechaResultadoAntiHBsAg"
                                            type="date" placeholder="Fecha de resultado" :format="dateFormat"
                                            :size="size" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" style="text-align:left">
                                    <el-form-item
                                        label="Realizacion del anticuerpo contra el antigeno de superficie de la HB(Anti-HBs):"
                                        prop="resultadoAntiHBs" class="select-width">
                                        <el-radio-group v-model="ruleFormHbClasificacion.resultadoAntiHBs">
                                            <el-radio :label="1">Reactivo</el-radio>
                                            <el-radio :label="0">No Reactivo</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Fecha de resultado:" prop="fechaResultadoAntiHBs"
                                        class="select-width">
                                        <el-date-picker v-model="ruleFormHbClasificacion.fechaResultadoAntiHBs" type="date"
                                            placeholder="Fecha de resultado" :format="dateFormat" :size="size" />
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" style="text-align:left"
                                    class="column-custom mb">
                                    <el-form-item label="Condicion final de niño o niña expuesto:" prop="condicionFinal"
                                        class="select-width">
                                        <el-radio-group v-model="ruleFormHbClasificacion.condicionFinal">
                                            <el-radio :label="1">Vivo</el-radio>
                                            <el-radio :label="2">muerto</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Clasificación del niño o niña expuesto frente al virus hepatitis B"
                                        prop="clasificacionFinal" class="select-width" style="width:100%">
                                        <el-select v-model="ruleFormHbClasificacion.clasificacionFinal"
                                            placeholder="Clasificación del niño o niña expuesto">
                                            <el-option v-for="(cne, index) in clasificacionNinoExpList" :key="index"
                                                :label="cne.valor" :value="cne.id" />
                                        </el-select>

                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row class="row-bg" justify="end">
                                <div class="btn-save">
                                    <el-button type="primary" size="default" @click="submitForm(fiveForm, 'six')">guardar y
                                        continuar</el-button>
                                </div>
                            </el-row>
                        </section>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="Reporte de datos " name="six" ref="elTab6">
                    <el-form style="width: 100%;" label-width="180px" :size="formSize" status-icon ref="sixForm"
                        label-position="top">
                        <section style="width: 100%;">
                            <el-row :gutter="10" style="width: 100%;">
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <h4 class="align-start">Reporte de datos por parte de la Entidad Administradora de
                                        Planes de
                                        Beneficios</h4>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                                    <el-form-item label="Fecha de reporte" prop="tipoDocumento" class="select-width"
                                        style="width:100%">
                                        <el-date-picker v-model="ruleFormHbDatosGestante.fechaIngreso" type="date"
                                            placeholder="Fecha de reporte" :format="dateFormat" :size="size" />
                                    </el-form-item>
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
import { RuleFormHbDatosGestante, DiagnosticoFormHb, TratamientoFormHb } from '@/interfaces/modeloHb'
import { IDiagnosticoGestanteHB, ITratamientoSeguimientoGestanteHB, IParametrica, ISeguimientoNinoExpuestoHB, IClasificacionNinoExpuestoHB } from "@/api/ETMIPLUS_API";
import moment from 'moment';
import * as ETMIPLUS_API from "@/api/ETMIPLUS_API";
import axios from 'axios';

type FormInstance = InstanceType<typeof ElForm>

interface IVacunacionHB {
    idVacuna?: number;
    idSeguimientoNinoExpuesto?: number;
    idDosisVacuna?: number;
    dosisVacuna?: IParametrica | IParametrica[];
    fechaAplicacion?: Date;
    valid?: boolean
}

@Options({
    components: {},
})

export default class HepatitisBView extends Vue {

    activeName = 'two'
    disabledTwo = true
    disabledThree = true
    disabledFour = true
    disabledFive = true
    disabledSix = true
    disabledSeven = true
    isVisible = false
    dateFormat = 'DD/MM/YYYY'
    position = 'right'
    enableaplicaronDosisVacunaRecienNacido = true
    enableInmunoglobinaHbRecienNacido = true


    firstForm = ref<FormInstance>()
    secondForm = ref<FormInstance>()
    thirdForm = ref<FormInstance>()
    fourForm = ref<FormInstance>()
    fiveForm = ref<FormInstance>()
    sixForm = ref<FormInstance>()
    sevenForm = ref<FormInstance>()

    dosisVacunaList: IParametrica[] = [];
    clasificacionNinoExpList: IParametrica[] = [];

    formSize = 'default';

    ETMIPLUS_API_Client = new ETMIPLUS_API.EtmiPlusClient(process.env.VUE_APP_APIURL, axios);

    vacunaSeguimiento: IVacunacionHB[] = [
        {
            dosisVacuna: [] as IParametrica[],
            fechaAplicacion: new Date(),
            valid: true
        }
    ]

    toggleEnableBoolean1() {
        if (Number(this.ruleFormHbSeguimientoMenorExp.aplicaronDosisVacunaRecienNacido) === 0) {
            this.enableaplicaronDosisVacunaRecienNacido = true
        } else {
            this.enableaplicaronDosisVacunaRecienNacido = false
        }
    }

    toggleEnableBoolean2() {
        if (Number(this.ruleFormHbSeguimientoMenorExp.aplicaronInmunoglobulinaRecienNacido) === 0) {
            this.enableInmunoglobinaHbRecienNacido = true
        } else {
            this.enableInmunoglobinaHbRecienNacido = false
        }
    }

    addFields() {
        this.validarVacunaSeguimiento = true
        if (this.vacunaSeguimiento.length <= 3) {
            this.vacunaSeguimiento.push({ dosisVacuna: [], fechaAplicacion: new Date(), valid: true });
        } else {
            this.validarVacunaSeguimiento = true
        }
    }

    validarVacunaSeguimiento: any = true;

    validateField = (index: number) => {
        const field = this.vacunaSeguimiento[index];
        console.log('validador', field)
        field.valid = field.dosisVacuna !== null && field.fechaAplicacion !== null;
        console.log('valor', field.valid)
        this.validarVacunaSeguimiento = !field.valid
    };

    momentoDiagnosticoList: IParametrica[] = []
    situacionGestanteList: IParametrica[] = []
    condicionRecienNacidoList: IParametrica[] = []
    tipoPartoList: IParametrica[] = []
    numeroProductosNacimientoList: IParametrica[] = []
    sexoList: IParametrica[] = []
    tipoRegimenSaludList: IParametrica[] = []
    tipoDocumentoList: IParametrica[] = []
    tiempoAplicacionVacunaList: IParametrica[] = []
    tiempoAplicacionInmonoglobulinaList: IParametrica[] = []


    handleClick(tab: TabsPaneContext, event: Event) {
        console.log('evento tab', tab.props.name, event)
        const tabName = tab.props.name as string;
        if (tabName !== undefined) {
            this.getParamsDbFirsTap(tabName)
        }

    }

    onResize(): void {
        // Handle screen resize logic here
        // You can access the window size using `window.innerWidth` and `window.innerHeight`
        //console.log('tamaño window', window.innerWidth)
        /*if (window.innerWidth <= 991) {
            
        } else { 
            //this.labelPosition = ref<FormProps['labelPosition']>(this.position)
        }*/
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

    pulbicIdDiagnosticoGestante = 0
    publicIdSeguimientoNinoExpuesto = 0

    async getAllFicha(idGestanteCtrl: number) {
        const fichaHb = await this.ETMIPLUS_API_Client.hepatitisB(idGestanteCtrl) as any;
        console.log('llego ficha', fichaHb)

        if (fichaHb.data.diagnosticoGestante.length !== 0) {
            this.pulbicIdDiagnosticoGestante = fichaHb.data.diagnosticoGestante[0].idDiagnosticoGestante;
            this.ruleFormHbDiagnosticoHb.momentoDiagnostico = fichaHb.data.diagnosticoGestante[0].idMomentoDiagnostico;
            this.ruleFormHbDiagnosticoHb.edadGestacional = fichaHb.data.diagnosticoGestante[0].edadGestacional;
            this.ruleFormHbDiagnosticoHb.fechaResultadoReactivo = fichaHb.data.diagnosticoGestante[0].fechaResultadoReactivo;
            this.ruleFormHbDiagnosticoHb.resultadoAntiHBcIgM = fichaHb.data.diagnosticoGestante[0].resultadoAntiHBcIgM;
            this.ruleFormHbDiagnosticoHb.fechaResultadoAntiHBcIgM = fichaHb.data.diagnosticoGestante[0].fechaResultadoAntiHBcIgM;
            this.ruleFormHbDiagnosticoHb.resultadoAntiHBcTotalOlgG = fichaHb.data.diagnosticoGestante[0].resultadoAntiHBcTotalOlgG;
            this.ruleFormHbDiagnosticoHb.fechaResultadoAntiHBcTotalOlgG = fichaHb.data.diagnosticoGestante[0].fechaResultadoAntiHBcTotalOlgG;
            this.ruleFormHbDiagnosticoHb.resultadoAntiHBeAg = fichaHb.data.diagnosticoGestante[0].resultadoAntiHBeAg;
            this.ruleFormHbDiagnosticoHb.fechaResultadoAntiHBeAg = fichaHb.data.diagnosticoGestante[0].fechaResultadoAntiHBeAg;
            this.ruleFormHbDiagnosticoHb.resultadoAntigenoCargaViral = fichaHb.data.diagnosticoGestante[0].resultadoAntigenoCargaViral;
            this.ruleFormHbDiagnosticoHb.fechaResultadoCargaViral = fichaHb.data.diagnosticoGestante[0].fechaResultadoCargaViral;
            this.ruleFormHbDiagnosticoHb.fechaResultadoCargaViral = fichaHb.data.diagnosticoGestante[0].fechaResultadoCargaViral;
            if (fichaHb.data.diagnosticoGestante[0].tratamientoSeguimientoGestante.length !== 0) {
                console.log('entro aqui')
                this.ruleFormHbTratamiento.recibioTratamientoAntesEmbarazoActual = fichaHb.data.diagnosticoGestante[0].tratamientoSeguimientoGestante[0].recibioTratamientoAntesEmbarazoActual;
                this.ruleFormHbTratamiento.requiereTratamientoAntesEmbarazoActual = fichaHb.data.diagnosticoGestante[0].tratamientoSeguimientoGestante[0].requiereTratamientoAntesEmbarazoActual;
                this.ruleFormHbTratamiento.edadGestacionalRecibioTratamientoAntesSemana = fichaHb.data.diagnosticoGestante[0].tratamientoSeguimientoGestante[0].edadGestacionalRecibioTratamientoAntesSemana;
                this.ruleFormHbTratamiento.requiereTratamientoDuranteEmbarazoActual = fichaHb.data.diagnosticoGestante[0].tratamientoSeguimientoGestante[0].requiereTratamientoDuranteEmbarazoActual;
                this.ruleFormHbTratamiento.edadGestacionalRecibioTratamientoDuranteSemana = fichaHb.data.diagnosticoGestante[0].tratamientoSeguimientoGestante[0].edadGestacionalRecibioTratamientoDuranteSemana;
                this.ruleFormHbTratamiento.nombreMedicamentoTratamiento = fichaHb.data.diagnosticoGestante[0].tratamientoSeguimientoGestante[0].nombreMedicamentoTratamiento;
                this.ruleFormHbTratamiento.situacionGestante = fichaHb.data.diagnosticoGestante[0].tratamientoSeguimientoGestante[0].idSituacionGestante;
            }
        }
        if (fichaHb.data.seguimientoNinoExpuesto.length !== 0) {
            this.publicIdSeguimientoNinoExpuesto = fichaHb.data.seguimientoNinoExpuesto[0].idSeguimientoNinoExpuesto;
            this.ruleFormHbSeguimientoMenorExp.condicionRecienNacido = fichaHb.data.seguimientoNinoExpuesto[0].idCondicionRecienNacido;
            this.ruleFormHbSeguimientoMenorExp.edadGestacionalNacimientoSemanas = fichaHb.data.seguimientoNinoExpuesto[0].edadGestacionalNacimientoSemanas;
            this.ruleFormHbSeguimientoMenorExp.tipoParto = fichaHb.data.seguimientoNinoExpuesto[0].idTipoParto;
            this.ruleFormHbSeguimientoMenorExp.numeroProductosNacimiento = fichaHb.data.seguimientoNinoExpuesto[0].idNumeroProductosNacimiento;
            this.ruleFormHbSeguimientoMenorExp.fechaParto = fichaHb.data.seguimientoNinoExpuesto[0].fechaParto;
            this.ruleFormHbSeguimientoMenorExp.sexo = fichaHb.data.seguimientoNinoExpuesto[0].idSexo;
            this.ruleFormHbSeguimientoMenorExp.tipoRegimenSalud = fichaHb.data.seguimientoNinoExpuesto[0].idTipoRegimenSalud;
            this.ruleFormHbSeguimientoMenorExp.nombreAseguradora = fichaHb.data.seguimientoNinoExpuesto[0].nombreAseguradora;
            this.ruleFormHbSeguimientoMenorExp.nombresApellidos = fichaHb.data.seguimientoNinoExpuesto[0].nombresApellidos;
            this.ruleFormHbSeguimientoMenorExp.tipoDocumento = fichaHb.data.seguimientoNinoExpuesto[0].idTipoDocumento;
            this.ruleFormHbSeguimientoMenorExp.numeroIdentificacion = fichaHb.data.seguimientoNinoExpuesto[0].numeroIdentificacion;
            this.ruleFormHbSeguimientoMenorExp.aplicaronDosisVacunaRecienNacido = fichaHb.data.seguimientoNinoExpuesto[0].aplicaronDosisVacunaRecienNacido;
            this.ruleFormHbSeguimientoMenorExp.tiempoAplicacionVacuna = fichaHb.data.seguimientoNinoExpuesto[0].idTiempoAplicacionVacuna;
            this.ruleFormHbSeguimientoMenorExp.aplicaronInmunoglobulinaRecienNacido = fichaHb.data.seguimientoNinoExpuesto[0].aplicaronInmunoglobulinaRecienNacido;
            this.ruleFormHbSeguimientoMenorExp.tiempoAplicacionInmonoglobulina = fichaHb.data.seguimientoNinoExpuesto[0].idTiempoAplicacionInmonoglobulina;
            this.vacunaSeguimiento = fichaHb.data.seguimientoNinoExpuesto[0].vacunacion
            this.vacunaSeguimiento.map((vacuna: any) => {
                console.log('llego la vacuna', vacuna)
                //examenParaClinico: [], fechaExamenParaClinico: new Date(), resultadoParaclinico: ''
                vacuna.dosisVacuna = vacuna.idDosisVacuna;
                //vacuna.fechaAplicacion = vacuna.fechaAplicacion; 
            })

            /*fichaHb.data.seguimientoNinoExpuesto[0].vacunacion.map((vacuna: any) => {
                this.vacunaSeguimiento.push(vacuna)
            })*/
        }
    }

    async getParamsDbFirsTap(step: string) {
        if (step === 'two') {
            const getParamsDiagnosticMoment = await this.ETMIPLUS_API_Client.parametrica2('MOMENTO_DIAGNOSTICO') as any;
            console.log('que trae 1', getParamsDiagnosticMoment)
            this.momentoDiagnosticoList = getParamsDiagnosticMoment.data

        } else if (step === 'three') {
            const getParamsSituacionGestante = await this.ETMIPLUS_API_Client.parametrica2('SITUACION_GESTANTE') as any;
            console.log('que trae 2', getParamsSituacionGestante)
            this.situacionGestanteList = getParamsSituacionGestante.data
        } else if (step === 'four') {
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

    ruleFormHbDiagnosticoHb = reactive<IDiagnosticoGestanteHB>({
        momentoDiagnostico: [] as any,
        edadGestacional: 0,
        fechaResultadoReactivo: new Date(),
        resultadoAntiHBcIgM: 0,
        fechaResultadoAntiHBcIgM: new Date(),
        resultadoAntiHBcTotalOlgG: 0,
        fechaResultadoAntiHBcTotalOlgG: new Date(),
        resultadoAntiHBeAg: 0,
        fechaResultadoAntiHBeAg: new Date(),
        resultadoAntigenoCargaViral: 0,
        fechaResultadoCargaViral: new Date()
    })

    ruleFormHbTratamiento = reactive<ITratamientoSeguimientoGestanteHB>({
        recibioTratamientoAntesEmbarazoActual: 0,
        requiereTratamientoAntesEmbarazoActual: 0,
        edadGestacionalRecibioTratamientoAntesSemana: 0,
        requiereTratamientoDuranteEmbarazoActual: 0,
        edadGestacionalRecibioTratamientoDuranteSemana: 0,
        nombreMedicamentoTratamiento: '',
        situacionGestante: [] as any,
    })

    ruleFormHbSeguimientoMenorExp = reactive<ISeguimientoNinoExpuestoHB>({
        condicionRecienNacido: [] as any,
        edadGestacionalNacimientoSemanas: 0,
        tipoParto: [] as any,
        numeroProductosNacimiento: [] as any,
        fechaParto: new Date(),
        sexo: [] as any,
        tipoRegimenSalud: [] as any,
        nombreAseguradora: '',
        direccionTerritorial: '',
        nombresApellidos: '',
        tipoDocumento: [] as any,
        numeroIdentificacion: '',
        aplicaronDosisVacunaRecienNacido: 0,
        tiempoAplicacionVacuna: [] as any,
        aplicaronInmunoglobulinaRecienNacido: 0,
        tiempoAplicacionInmonoglobulina: [] as any,
        vacunacion: [] as any,
        clasificacionNinoExpuesto: []
    })

    ruleFormHbClasificacion = reactive<IClasificacionNinoExpuestoHB>({
        resultadoAntiHBsAg: [] as any,
        fechaResultadoAntiHBsAg: new Date(),
        resultadoAntiHBs: [] as any,
        fechaResultadoAntiHBs: new Date(),
        condicionFinal: [] as any,
        clasificacionFinal: [] as any
    })


    rulesDiagnosticoHb = reactive<FormRules<IDiagnosticoGestanteHB>>({
        momentoDiagnostico: [
            {
                required: true,
                message: 'Por favor seleccione el momento del diagnostico',
                trigger: 'change',
            },
        ],
        edadGestacional: [
            { required: true, message: 'Por favor digite las semanas', trigger: 'blur' }
        ],
        fechaResultadoReactivo: [
            {
                required: true,
                message: 'Por favor seleccione una fecha',
                trigger: 'blur',
            }
        ],
        resultadoAntiHBcIgM: [
            {
                required: true,
                message: 'Este campo es requerido',
                trigger: 'change',
            }
        ],
        fechaResultadoAntiHBcIgM: [
            {
                required: true,
                message: 'Por favor seleccione una fecha',
                trigger: 'blur',
            }
        ],
        resultadoAntiHBcTotalOlgG: [
            {
                required: true,
                message: 'Este campo es requerido',
                trigger: 'change',
            }
        ],
        fechaResultadoAntiHBcTotalOlgG: [
            {
                required: true,
                message: 'Por favor seleccione una fecha',
                trigger: 'blur',
            }
        ],
        resultadoAntiHBeAg: [
            {
                required: true,
                message: 'Este campo es requerido',
                trigger: 'change',
            }
        ],
        fechaResultadoAntiHBeAg: [
            {
                required: true,
                message: 'Por favor seleccione una fecha',
                trigger: 'blur',
            }
        ],
        resultadoAntigenoCargaViral: [
            { required: true, message: 'Por favor ingrese el resultado', trigger: 'blur' }
        ],
        fechaResultadoCargaViral: [
            {
                required: true,
                message: 'Por favor seleccione una fecha',
                trigger: 'blur',
            }
        ]
    })

    ruleSFormHbTratamiento = reactive<FormRules<ITratamientoSeguimientoGestanteHB>>({
        recibioTratamientoAntesEmbarazoActual: [
            {
                required: true,
                message: 'Este campo es requerido',
                trigger: 'change',
            }
        ],
        requiereTratamientoAntesEmbarazoActual: [
            {
                required: true,
                message: 'Este campo es requerido',
                trigger: 'change',
            }
        ],
        edadGestacionalRecibioTratamientoAntesSemana: [
            { required: true, message: 'Por favor digite la semana', trigger: 'blur' }
        ],
        requiereTratamientoDuranteEmbarazoActual: [
            {
                required: true,
                message: 'Este campo es requerido',
                trigger: 'change',
            }
        ],
        edadGestacionalRecibioTratamientoDuranteSemana: [
            { required: true, message: 'Por favor digite la semana', trigger: 'blur' }
        ],
        nombreMedicamentoTratamiento: [
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

    rulesFormHbSeguimientoMenorExp = reactive<FormRules<ISeguimientoNinoExpuestoHB>>({
        condicionRecienNacido: [
            {
                required: true,
                message: 'Este campo es requerido',
                trigger: 'change',
            }
        ],
        edadGestacionalNacimientoSemanas: [
            {
                required: true,
                message: 'Este campo es requerido',
                trigger: 'change',
            }
        ],
        tipoParto: [
            { required: true, message: 'Por favor digite la semana', trigger: 'change' }
        ],
        numeroProductosNacimiento: [
            {
                required: true,
                message: 'Este campo es requerido',
                trigger: 'change',
            }
        ],
        fechaParto: [
            { required: true, message: 'Por favor digite la semana', trigger: 'change' }
        ],
        sexo: [
            { required: true, message: 'Por favor ingrese el nombre del medicamento', trigger: 'change' }
        ],
        tipoRegimenSalud: [
            {
                required: true,
                message: 'Por favor seleccione una opción',
                trigger: 'change',
            }
        ],
        nombreAseguradora: [
            {
                required: true,
                message: 'Por favor seleccione una opción',
                trigger: 'blur',
            }
        ],
        direccionTerritorial: [
            {
                required: false,
                message: 'Por favor suministre una dirección',
                trigger: 'blur',
            }
        ],
        nombresApellidos: [
            {
                required: true,
                message: 'Este campo es requerido',
                trigger: 'blur',
            }
        ],
        tipoDocumento: [
            {
                required: true,
                message: 'Este campo es requerido',
                trigger: 'change',
            }
        ],
        numeroIdentificacion: [
            {
                required: true,
                message: 'Este campo es requerido',
                trigger: 'change',
            }
        ],
        aplicaronDosisVacunaRecienNacido: [
            {
                required: true,
                message: 'Este campo es requerido',
                trigger: 'change',
            }
        ],
        tiempoAplicacionVacuna: [
            {
                required: false,
                message: 'Indique en que tiempo se le aplico la vacuna',
                trigger: 'change',
            }
        ],
        aplicaronInmunoglobulinaRecienNacido: [
            {
                required: true,
                message: 'Este campo es requerido',
                trigger: 'change',
            }
        ],
        tiempoAplicacionInmonoglobulina: [
            {
                required: false,
                message: 'Indique en que tiempo se le aplico la vacuna',
                trigger: 'change',
            }
        ],
        vacunacion: [
            {
                required: true,
                message: 'Este campo es requerido',
                trigger: 'change',
            }
        ]
    })

    rulesFormHbClasificacion = reactive<FormRules<IClasificacionNinoExpuestoHB>>({
        resultadoAntiHBsAg: [
            {
                required: true,
                message: 'Este campo es requerido',
                trigger: 'change',
            },
        ],
        fechaResultadoAntiHBsAg: [
            {
                required: true,
                message: 'Este campo es requerido',
                trigger: 'change',
            },
        ],
        resultadoAntiHBs: [
            {
                required: true,
                message: 'Este campo es requerido',
                trigger: 'change',
            },
        ],
        fechaResultadoAntiHBs: [
            {
                required: true,
                message: 'Este campo es requerido',
                trigger: 'change',
            },
        ],
        condicionFinal: [
            {
                required: true,
                message: 'Este campo es requerido',
                trigger: 'change',
            },
        ],
        clasificacionFinal: [
            {
                required: true,
                message: 'Este campo es requerido',
                trigger: 'change',
            },
        ]
    })

    changeTab(tabName: string) {

        console.log('nombre tab', tabName)
        //document.getElementById('tab-'+tabName)?.classList.remove('is-disabled')
        //console.log(document.getElementById('tab-'+tabName))
        //const elTabComponent = this.$refs.elTab2 as HTMLElement; // Or use querySelector if necessary
        //const elTabComponent: HTMLElement = (this.$refs.elTab2 as any) as HTMLElement;
        if (tabName === 'two') {
            this.disabledTwo = false
            this.activeName = tabName;
        } else if (tabName === 'three') {
            console.log('entro 3', tabName)


            const request: IDiagnosticoGestanteHB = {
                idDiagnosticoGestante: 0,
                idGestanteControl: this.idGestanteCtrl,
                idMomentoDiagnostico: Number(this.ruleFormHbDiagnosticoHb.momentoDiagnostico),
                edadGestacional: Number(this.ruleFormHbDiagnosticoHb.edadGestacional),
                fechaResultadoReactivo: new Date(moment(this.ruleFormHbDiagnosticoHb.fechaResultadoReactivo).format('YYYY-MM-DD HH:mm:ss.sss')),
                resultadoAntiHBcIgM: Number(this.ruleFormHbDiagnosticoHb.resultadoAntiHBcIgM),
                fechaResultadoAntiHBcIgM: new Date(moment(this.ruleFormHbDiagnosticoHb.fechaResultadoAntiHBcIgM).format('YYYY-MM-DD HH:mm:ss.sss')),
                resultadoAntiHBcTotalOlgG: Number(this.ruleFormHbDiagnosticoHb.resultadoAntiHBcTotalOlgG),
                fechaResultadoAntiHBcTotalOlgG: new Date(moment(this.ruleFormHbDiagnosticoHb.fechaResultadoAntiHBcTotalOlgG).format('YYYY-MM-DD HH:mm:ss.sss')),
                resultadoAntiHBeAg: Number(this.ruleFormHbDiagnosticoHb.resultadoAntiHBeAg),
                fechaResultadoAntiHBeAg: new Date(moment(this.ruleFormHbDiagnosticoHb.fechaResultadoAntiHBeAg).format('YYYY-MM-DD HH:mm:ss.sss')),
                resultadoAntigenoCargaViral: Number(this.ruleFormHbDiagnosticoHb.resultadoAntigenoCargaViral),
                fechaResultadoCargaViral: new Date(moment(this.ruleFormHbDiagnosticoHb.fechaResultadoCargaViral).format('YYYY-MM-DD HH:mm:ss.sss'))
            }
            this.registroReporte(request, tabName)

            this.disabledThree = false
            this.activeName = tabName;
        } else if (tabName === 'four') {
            //this.activeName = tabName

            const request: ITratamientoSeguimientoGestanteHB = {
                idTratamientoSeguimiento: 0,
                idDiagnosticoGestante: Number(this.idGestanteCtrl),
                recibioTratamientoAntesEmbarazoActual: Number(this.ruleFormHbTratamiento.recibioTratamientoAntesEmbarazoActual),
                requiereTratamientoAntesEmbarazoActual: Number(this.ruleFormHbTratamiento.requiereTratamientoAntesEmbarazoActual),
                edadGestacionalRecibioTratamientoAntesSemana: Number(this.ruleFormHbTratamiento.edadGestacionalRecibioTratamientoAntesSemana),
                requiereTratamientoDuranteEmbarazoActual: Number(this.ruleFormHbTratamiento.requiereTratamientoDuranteEmbarazoActual),
                edadGestacionalRecibioTratamientoDuranteSemana: Number(this.ruleFormHbTratamiento.edadGestacionalRecibioTratamientoDuranteSemana),
                nombreMedicamentoTratamiento: this.ruleFormHbTratamiento.nombreMedicamentoTratamiento,
                idSituacionGestante: Number(this.ruleFormHbTratamiento.situacionGestante)
            }
            this.registroReporte(request, tabName)

        } else if (tabName === 'five') {
            //this.disabledFive = false
            //this.activeName = tabName  
            const setVacunacion = this.vacunaSeguimiento.map((res: any) => {
                return {
                    idVacuna: 0,
                    idSeguimientoNinoExpuesto: 0,
                    idDosisVacuna: res.dosisVacuna,
                    fechaAplicacion: res.fechaAplicacion
                }

            })

            console.log('vacunas', setVacunacion)

            const request: ISeguimientoNinoExpuestoHB = {
                idSeguimientoNinoExpuesto: 0,
                idGestanteControl: Number(this.idGestanteCtrl),
                idCondicionRecienNacido: Number(this.ruleFormHbSeguimientoMenorExp.condicionRecienNacido),
                edadGestacionalNacimientoSemanas: Number(this.ruleFormHbSeguimientoMenorExp.edadGestacionalNacimientoSemanas),
                idTipoParto: Number(this.ruleFormHbSeguimientoMenorExp.tipoParto),
                idNumeroProductosNacimiento: Number(this.ruleFormHbSeguimientoMenorExp.numeroProductosNacimiento),
                fechaParto: new Date(moment(this.ruleFormHbSeguimientoMenorExp.fechaParto).format('YYYY-MM-DD HH:mm:ss.sss')),
                idSexo: Number(this.ruleFormHbSeguimientoMenorExp.sexo),
                idTipoRegimenSalud: Number(this.ruleFormHbSeguimientoMenorExp.tipoRegimenSalud),
                nombreAseguradora: this.ruleFormHbSeguimientoMenorExp.nombreAseguradora,
                nombresApellidos: this.ruleFormHbSeguimientoMenorExp.nombresApellidos,
                idTipoDocumento: Number(this.ruleFormHbSeguimientoMenorExp.tipoDocumento),
                numeroIdentificacion: this.ruleFormHbSeguimientoMenorExp.numeroIdentificacion,
                aplicaronDosisVacunaRecienNacido: Number(this.ruleFormHbSeguimientoMenorExp.aplicaronDosisVacunaRecienNacido),
                idTiempoAplicacionVacuna: Number(this.ruleFormHbSeguimientoMenorExp.tiempoAplicacionVacuna),
                aplicaronInmunoglobulinaRecienNacido: Number(this.ruleFormHbSeguimientoMenorExp.aplicaronInmunoglobulinaRecienNacido),
                idTiempoAplicacionInmonoglobulina: Number(this.ruleFormHbSeguimientoMenorExp.tiempoAplicacionInmonoglobulina),
                //vacunacion: setVacunacion
            }
            this.registroReporte(request, tabName)
        } else if (tabName === 'six') {
            const request: IClasificacionNinoExpuestoHB = {
                idClasificacionNinoExpuesto: 0,
                idSeguimientoNinoExpuesto: 0,
                idResultadoAntiHBsAg: Number(this.ruleFormHbClasificacion.resultadoAntiHBsAg),
                fechaResultadoAntiHBsAg: new Date(moment(this.ruleFormHbClasificacion.fechaResultadoAntiHBsAg).format('YYYY-MM-DD HH:mm:ss.sss')),
                idResultadoAntiHBs: Number(this.ruleFormHbClasificacion.resultadoAntiHBs),
                fechaResultadoAntiHBs: new Date(moment(this.ruleFormHbClasificacion.fechaResultadoAntiHBs).format('YYYY-MM-DD HH:mm:ss.sss')),
                idCondicionFinal: Number(this.ruleFormHbClasificacion.condicionFinal),
                idClasificacionFinal: Number(this.ruleFormHbClasificacion.clasificacionFinal),
            }
            this.registroReporte(request, tabName)
        }
        //console.log(elTabComponent)
    }

    idSeguimientNinoExp = 0;
    async registroReporte(reporteForm: any, tabName: string) {
        console.log(reporteForm)

        if (tabName === 'three') {
            const requestPrimerReporte = await this.ETMIPLUS_API_Client.diagnosticoGestante(reporteForm.idGestanteControl, reporteForm) as any;
            console.log('response', requestPrimerReporte)


            if (requestPrimerReporte.length !== 0) {
                const message = 'Diagnostico guardado con éxito.'
                this.showMessage(message).then(() => {
                    ElMessage.info(message);
                });

            } else {
                const message = 'Se presentó un error. Verifiqué la información e intenté de nuevo.'
                this.showMessage(message).then(() => {
                    ElMessage.info(message);
                });
            }

        } else if (tabName === 'four') {
            const requestSegundoReporte = await this.ETMIPLUS_API_Client.tratamientoSeguimientoGestante(reporteForm.idDiagnosticoGestante, reporteForm) as any;
            console.log('response', requestSegundoReporte)

            if (requestSegundoReporte.length !== 0) {
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
        } else if (tabName === 'five') {
            console.log('request', reporteForm)
            const requestTercerReporte = await this.ETMIPLUS_API_Client.seguimientoNinoExpuesto(reporteForm.idGestanteControl, reporteForm) as any;
            console.log('response', requestTercerReporte)


            if (requestTercerReporte.length !== 0) {

                const message = 'Reporte guardado con éxito.'
                this.showMessage(message).then(() => {
                    ElMessage.info(message);

                });

                this.idSeguimientNinoExp = requestTercerReporte.data.idSeguimientoNinoExpuesto

                const setVacunacion = this.vacunaSeguimiento.map((res: any) => {
                    return {
                        idVacuna: 0,
                        idSeguimientoNinoExpuesto: Number(requestTercerReporte.data.idSeguimientoNinoExpuesto),
                        idDosisVacuna: Number(res.dosisVacuna),
                        fechaAplicacion: new Date(moment(res.fechaAplicacion).format('YYYY-MM-DD HH:mm:ss.sss')),
                    }

                })

                console.log('vacunas', setVacunacion)
                reporteForm.vacunacion = setVacunacion

                const requestVacunasNinoExpHb = await this.ETMIPLUS_API_Client.vacunacion(requestTercerReporte.data.idSeguimientoNinoExpuesto, reporteForm.vacunacion) as any;
                console.log('response vacunas', requestVacunasNinoExpHb)

                if (requestVacunasNinoExpHb.length !== 0) {
                    const message = 'Vacunas guardadas con éxito.'
                    this.showMessage(message).then(() => {
                        ElMessage.info(message);
                    });
                    this.activeName = tabName;
                    this.disabledFour = false
                } else {
                    this.activeName = tabName;
                    this.disabledFour = false
                }

            } else {
                const message = 'Se presentó un error. Verifiqué la información e intenté de nuevo.'
                this.showMessage(message).then(() => {
                    ElMessage.info(message);
                });
            }
        } else if (tabName === 'six') {
            reporteForm.idSeguimientoNinoExpuesto = this.idSeguimientNinoExp !== 0 ? this.idSeguimientNinoExp : this.publicIdSeguimientoNinoExpuesto
            console.log('request', reporteForm)
            const ctrlIdGstante = this.idGestanteCtrl as any
            console.log('id ctrl gestante', ctrlIdGstante)
            const requestCuartoReporte = await this.ETMIPLUS_API_Client.clasificacionNinoExpuesto(ctrlIdGstante, reporteForm) as any;
            console.log('response', requestCuartoReporte)


            if (requestCuartoReporte.length !== 0) {
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
        } else if (tabName === 'seven') {
            console.log('request', reporteForm)
            const requestQuintoReporte = await this.ETMIPLUS_API_Client.reporte5POST(reporteForm.idGestanteControl, reporteForm) as any;
            console.log('response', requestQuintoReporte)

            this.activeName = tabName

            if (requestQuintoReporte.length !== 0) {
                const message = 'Reporte guardado con éxito.'
                this.showMessage(message).then(() => {
                    ElMessage.info(message);
                });
                reporteForm.listParaclinicos.map((paraClinico: any) => {
                    paraClinico.idReporte = Number(requestQuintoReporte.data.idReporte)
                })

                console.log('paraclinicos del menor', reporteForm.listParaclinicos)

                const requestParaCliniciMenor = await this.ETMIPLUS_API_Client.paraclinicoNinoPOST(requestQuintoReporte.data.idReporte, reporteForm.listParaclinicos) as any;

                if (requestParaCliniciMenor.length !== 0) {
                    const message = 'Paraclínicos guardados con éxito.'
                    this.showMessage(message).then(() => {
                        ElMessage.info(message);
                        this.activeName = tabName;
                        this.disabledSix = false
                    });
                } else {
                    const message = 'Se presentó un error. Verifiqué la información e intenté de nuevo.'
                    this.showMessage(message).then(() => {
                        ElMessage.info(message);
                    });
                }

            } else {
                const message = 'Se presentó un error. Verifiqué la información e intenté de nuevo.'
                this.showMessage(message).then(() => {
                    ElMessage.info(message);
                });
            }

        } else if (tabName === 'end') {
            console.log('request', reporteForm)
            const reporteBinomio = await this.ETMIPLUS_API_Client.reporteBinomioPOST(reporteForm.idGestante, reporteForm) as any;
            console.log('response', reporteBinomio)

            this.activeName = tabName

            if (reporteBinomio.length !== 0) {
                const message = 'Reporte guardado con éxito.'
                this.showMessage(message).then(() => {
                    ElMessage.info(message);
                });

            } else {
                const message = 'Se presentó un error. Verifiqué la información e intenté de nuevo.'
                this.showMessage(message).then(() => {
                    ElMessage.info(message);
                });
            }

        }
    }

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

    showMessage(message: string) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(message);
            }, 1000);
        });
    }
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

.w-100 {
    width: 100%;
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
}</style>