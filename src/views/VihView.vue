<template class="steps-container">
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">

    <el-tab-pane label="Primer reporte" name="second" ref="elTab2">

      <el-form :model="ruleFormPrimerReporte" ref="secondForm" label-position="top" :rules="rulesFormPrimerReporte"
        label-width="180px" status-icon size="default">
        <section style="width: 100%;">
          <el-row :gutter="10" style="width: 100%;">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <h4 class="align-start">DIAGNOSTICO - TRATAMIENTO ANTIRRETROVIRAL Y SEGUIMIENTO</h4>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <h5 class="align-start">MOMENTO DEL DIAGNOSTICO DE VIH, CON RELACIÓN AL EMBARAZO ACTUAL:</h5>
            </el-col>

            <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
              <el-form-item label="Momento del diagnostico de VIH" prop="momentoDiagnostico" class="select-width">
                <el-select v-model="ruleFormPrimerReporte.momentoDiagnostico" placeholder="Momento del diagnostico">
                  <el-option label="Antes del embarazo actual" value="1" />
                  <el-option label="Durante el embarazo actual" value="2" />
                  <el-option label="Posterior al parto" value="3" />
                </el-select>
              </el-form-item>
            </el-col>


            <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
              <el-form-item label="Prueba confirmación de VIH" prop="pruebaConfirmarVih" class="select-width">
                <el-select v-model="ruleFormPrimerReporte.pruebaConfirmarVih" @change="toggleDiv"
                  placeholder="Prueba confirmación de VIH">
                  <el-option label="Carga viral" value="1" />
                  <el-option label="Western blot" value="2" />
                  <el-option label="ADN Proviral" value="3" />
                  <el-option label="Prueba rapida" value="4" />
                  <el-option label="ELISA" value="5" />
                  <el-option label="Quimioluminiscensia" value="6" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="column-custom">
              <!--<el-form-item label="Fecha probable del parto" prop="fechaProbableParto">
                <el-input v-model="ruleFormPrimerReporte.fechaProbableParto" />
              </el-form-item>-->
              <el-form-item label="Fecha del diagnóstico del VIH" prop="fechaDiagnostico" class="w-100">
                <el-date-picker v-model="ruleFormTercerReporte.fechaDiagnostico" type="date"
                  placeholder="Fecha del diagnóstico del VIH" :format="dateFormat" :size="size" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6" class="column-custom">
              <el-form-item label="Resultado de la prueba" prop="idResultados" class="select-width">
                <el-radio-group v-model="ruleFormPrimerReporte.idResultados">
                  <el-radio :label="1" size="small">Positivo</el-radio>
                  <el-radio :label="2" size="small">Reactivo</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
              <el-form-item label="copias/mls" prop="resultados">
                <el-input id="copiasMlDiagn" v-model="ruleFormPrimerReporte.resultados"
                  :disabled="showCopiasMlMomentoDiagn" type="number" step="0.1" />
              </el-form-item>
            </el-col>
            <el-divider />
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <h5 class="align-start">PARACLINICOS REALIZADOS A LA GESTANTE EN EL EMBARAZO ACTUAL:</h5>
            </el-col>
            <div v-for="(paraclinico, index) in paraClinicosFields" :key="index" class="w-100 no-margin el-row">

              <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">

                <el-form-item label="Examen" :prop="examenParaClinico" class="select-width">
                  <el-select v-model="paraclinico.examenParaClinico" placeholder="Exámenes paraclínicos"
                    @change="validateField(index)">
                    <el-option label="Carga viral" value="1" />
                    <el-option label="Conteo de linfocitos T CD4" value="2" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" class="column-custom">
                <!--<el-form-item label="Fecha" prop="fechaExamenMl1">
                <el-input v-model="ruleFormPrimerReporte.fechaExamenMl1" />
              </el-form-item>-->
                <el-form-item label="Fecha" prop="fechaExamenParaClinico" class="w-100">
                  <el-date-picker v-model="paraclinico.fechaExamenParaClinico" @change="validateField(index)" type="date"
                    placeholder="Fecha" :format="dateFormat" :size="size" />
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                <el-form-item label="Resultado: copias/mls" prop="resultadoParaclinico">
                  <el-input v-model="paraclinico.resultadoParaclinico" type="number" step="0.1"
                    @input="validateField(index)" />
                </el-form-item>
              </el-col>
            </div>
            <el-col :span="24">
              <el-button type="primary" size="default" @click="addFields">
                Agregar exámen
              </el-button>
            </el-col>
            <el-divider />
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <h5 class="align-start">GESTANTE CON DIAGNÓSTICO DE VIH ANTES DEL EMBARAZO ACTUAL:</h5>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
              <el-form-item label="La gestante venía recibiendo TAR para VIH antes de iniciar el embarazo actual"
                prop="estabaRecibiendoTARAntesEmbarazo" @change="toggleEnableBoolean1">
                <el-radio-group v-model="ruleFormPrimerReporte.estabaRecibiendoTARAntesEmbarazo">
                  <el-radio :label="1">Si</el-radio>
                  <el-radio :label="0">No</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" @change="toggleEnableBoolean2">
              <el-form-item label="¿La gestante inicio TAR durante el embarazo?" prop="recibioTARDuranteEmbarazo">
                <el-radio-group v-model="ruleFormPrimerReporte.recibioTARDuranteEmbarazo"
                  :disabled="enableRecibioTarEmbarazo">
                  <el-radio :label="1">Si</el-radio>
                  <el-radio :label="0">No</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
              <el-form-item label="Semana gestacional en que lo recibió:" prop="edadGestacionalInicioTARSemanas">
                <el-input id="copiasMlDiagn" v-model="ruleFormPrimerReporte.edadGestacionalInicioTARSemanas"
                  :disabled="enableSemanaRecibioTar" type="number" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <h5 class="align-start">GESTANTE CON DIAGNÓSTICO DE VIH DURANTE EL EMBARAZO ACTUAL <el-text
                  type="primary">(POSTERIOR AL PARTO):</el-text></h5>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
              <el-form-item label="¿Recibió TAR para VIH durante el embarazo actual?"
                prop="estabaRecibiendoTARDuranteEmbarazoActual" @change="toggleEnableBoolean3">
                <el-radio-group v-model="ruleFormPrimerReporte.estabaRecibiendoTARDuranteEmbarazoActual">
                  <el-radio :label="1">Si</el-radio>
                  <el-radio :label="0">No</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
              <el-form-item label="Semana gestacional en que lo recibió:" prop="edadGestacionalCuandoRecibioTAR">
                <el-input id="copiasMlDiagn" v-model="ruleFormPrimerReporte.edadGestacionalCuandoRecibioTAR"
                  :disabled="enableRecibioTarDurantEmbarazo" type="number" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
              <el-form-item label="Edad gestacional al diagnóstico de VIH, en semanas (Durante):"
                prop="edadGestacionalAlDianosticoVIHSemanas">
                <el-input id="copiasMlDiagn" v-model="ruleFormPrimerReporte.edadGestacionalAlDianosticoVIHSemanas"
                  :disabled="edadGestancionalDiagnostico" type="number" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <h5 class="align-start">MEDICAMENTOS ANTIRRETROVIRALES SUMINISTRADOS EN LA GESTACIÓN ACTUAL</h5>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
              <el-form-item label="Medicamentos antirretrovirales" prop="medicamentosARVSuministrados"
                class="select-width">
                <el-select v-model="ruleFormPrimerReporte.medicamentosARVSuministrados"
                  placeholder="Medicamentos antirretrovirales" multiple filterable allow-create>
                  <el-option label="Lamivudina" value="Lamivudina" />
                  <el-option label="Abacavir" value="Abacavir" />
                  <el-option label="Emtricitabina" value="Emtricitabina" />
                  <el-option label="Tenofovir disoproxil fumarato" value="Tenofovir disoproxil fumarato" />
                  <el-option label="Efavirez" value="Efavirez" />
                  <el-option label="Atazanavir" value="Atazanavir" />
                  <el-option label="Darunavir" value="Darunavir" />
                  <el-option label="Lopinavir" value="Lopinavir" />
                  <el-option label="Ritonavir" value="Ritonavir" />
                  <el-option label="Raltegravir" value="Raltegravir" />
                  <el-option label="Dolutegravir" value="Dolutegravir" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <h5 class="align-start">CONTROL PRENATAL</h5>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
              <el-form-item label="Recibio Control Prenatal" prop="seRealizoControlPrenatalDuranteEmbarazo">
                <el-radio-group v-model="ruleFormPrimerReporte.seRealizoControlPrenatalDuranteEmbarazo">
                  <el-radio :label="1">Si</el-radio>
                  <el-radio :label="0">No</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
              <el-form-item label="Edad gestacional al primer control prenatal, en semanas"
                prop="edadGestacionalPrimerControlPrenatalSemanas">
                <el-input v-model="ruleFormPrimerReporte.edadGestacionalPrimerControlPrenatalSemanas" type="number" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8" class="column-custom">
              <!--<el-form-item label="Fecha probable del parto" prop="fechaProbableParto">
                <el-input v-model="ruleFormPrimerReporte.fechaProbableParto" />
              </el-form-item>-->
              <el-form-item label="Fecha probable del parto" prop="fechaProbableParto" class="w-100">
                <el-date-picker v-model="ruleFormPrimerReporte.fechaProbableParto" type="date"
                  placeholder="Fecha probable del parto" :format="dateFormat" :size="size" />
              </el-form-item>
            </el-col>
          </el-row>

          <el-row class="row-bg" justify="end">
            <div class="btn-save">
              <el-button type="primary" size="default" @click="submitForm(secondForm, 'third')">guardar y
                continuar</el-button>
            </div>
          </el-row>

        </section>
      </el-form>


    </el-tab-pane>
    <el-tab-pane label="Segundo reporte" name="third">

      <el-form :model="ruleFormSegundoReporte" ref="thirdForm" label-position="top" :rules="rulesFormSegundoReporte"
        status-icon>
        <section style="width: 100%;">
          <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <h5 class="align-start">CARGA VIRAL REALIZADA 2 - 4 SEMANAS ANTES DEL PARTO</h5>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8"> 
              <el-form-item label="Carga Viral" prop="tieneCargaViral">
                <el-radio-group v-model="ruleFormSegundoReporte.tieneCargaViral">
                  <el-radio :label="1">Si</el-radio>
                  <el-radio :label="0">No</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="column-custom">
              <!--<el-form-item label="Fecha" prop="fecha">
                <el-input v-model="ruleFormSegundoReporte.fecha" />
              </el-form-item>-->
              <el-form-item label="Fecha" prop="fechaResultado" class="w-100">
                <el-date-picker v-model="ruleFormSegundoReporte.fechaResultado" type="date" placeholder="Fecha"
                  :format="dateFormat" :size="size" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
              <el-form-item label="Resultados" prop="resultadoCargaViral">
                <el-input v-model="ruleFormSegundoReporte.resultadoCargaViral" type="number" step="0.1" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row class="row-bg" justify="end">
            <div class="btn-save">
              <el-button type="primary" size="default" @click="submitForm(thirdForm, 'four')">guardar y
                continuar</el-button>
            </div>
          </el-row>
        </section>
      </el-form>

    </el-tab-pane>
    <el-tab-pane label="tercer reporte" name="four">

      <el-form :model="ruleFormTercerReporte" :rules="rulesFormTercerReporte" label-position="top" :size="formSize"
        status-icon ref="fourForm">
        <section style="width: 100%;">
          <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <h5 class="align-start">SITUACIÓN DE LA GESTANTE CON EL EMBARAZO ACTUAL</h5>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
              <el-form-item label="Situación gestante" prop="situacionGestante">
                <el-select v-model="ruleFormTercerReporte.situacionGestante" class="w-100"
                  placeholder="Situación gestante">
                  <el-option label="Aborto" value="1" />
                  <el-option label="IVE" value="2" />
                  <el-option label="Mortalidad Materna" value="3" />
                  <el-option label="Parto" value="4" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="column-custom">
              <!--<el-form-item label="Fecha del parto" prop="fechaDelParto">
                <el-input v-model="ruleFormTercerReporte.fechaDelParto" />
              </el-form-item>-->
              <el-form-item label="Fecha del parto" prop="fechaDelParto">
                <el-date-picker v-model="ruleFormTercerReporte.fechaDelParto" type="date" placeholder="Fecha del parto"
                  :size="size" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
              <el-form-item label="Recibio TAR en interparto" prop="tarEnInterparto">
                <el-radio-group v-model="ruleFormTercerReporte.tarEnInterparto">
                  <el-radio :label="1">Si</el-radio>
                  <el-radio :label="0">No</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="mt mb">
              <el-form-item label="Esquema Arv en interparto" prop="esquemaArvEnInterparto">
                <el-radio-group v-model="ruleFormTercerReporte.esquemaArvEnInterparto">
                  <el-radio :label="1">Simeduvina</el-radio>
                  <el-radio :label="2">Nevirapina</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="mt mb">
              <el-form-item label="Condición del recien nacido" prop="condicionRecienNacido">
                <el-radio-group v-model="ruleFormTercerReporte.condicionRecienNacido">
                  <el-radio :label="1">Vivo</el-radio>
                  <el-radio :label="2">Mortinato</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="mt mb">
              <el-form-item label="Numero de productos al nacimiento" prop="numeroDeProductosAlNacimiento">
                <el-radio-group v-model="ruleFormTercerReporte.numeroDeProductosAlNacimiento">
                  <el-radio :label="1">único</el-radio>
                  <el-radio :label="2">Multiple</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="mt mb column-custom">
              <!--<el-form-item label="Fecha del parto" prop="edadGestacionalAlNacimientoEnSemana">
                <el-input v-model="ruleFormTercerReporte.edadGestacionalAlNacimientoEnSemana" />
              </el-form-item>-->
              <el-form-item label="Fecha del parto" prop="edadGestacionalAlNacimientoEnSemana">
                <el-date-picker v-model="ruleFormTercerReporte.edadGestacionalAlNacimientoEnSemana" type="date"
                  placeholder="Fecha del parto" :format="dateFormat" :size="size" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="mt mb">
              <el-form-item label="Peso" prop="pesoEnGramos">
                <el-input v-model="ruleFormTercerReporte.pesoEnGramos" type="number" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="mt mb">
              <el-form-item label="Sexo" prop="sexo">
                <el-radio-group v-model="ruleFormTercerReporte.sexo">
                  <el-radio :label="1">Hombre</el-radio>
                  <el-radio :label="2">Mujer</el-radio>
                  <el-radio :label="3">Intersexual</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="mt mb">
              <el-form-item label="Tipo de parto" prop="tipoParto">
                <el-radio-group v-model="ruleFormTercerReporte.tipoParto">
                  <el-radio :label="1">Cesarea</el-radio>
                  <el-radio :label="2">Vaginal</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="mt mb">
              <el-form-item label="Supreción de la lactancia" prop="suprecionDeLactancia">
                <el-radio-group v-model="ruleFormTercerReporte.suprecionDeLactancia">
                  <el-radio :label="1">Si</el-radio>
                  <el-radio :label="0">No</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="mt mb">
              <el-form-item label="Medicamentos suministrados" prop="medicamentoSuministrado">
                <el-radio-group v-model="ruleFormTercerReporte.medicamentoSuministrado">
                  <el-radio :label="1" @click="isVisible = false">Cabergolina</el-radio>
                  <el-radio :label="2" @click="isVisible = true">Otro</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8" v-show="isVisible">
              <el-form-item label="Otro" prop="otroMedicamento">
                <el-input v-model="ruleFormTercerReporte.otroMedicamento" />
              </el-form-item>
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

    <el-tab-pane label="Cuarto reporte" name="five">

      <el-form :model="ruleFormCuartoReporte" :rules="rulesFormCuartoReporte" label-width="180px" class="demo-ruleForm"
        :size="formSize" status-icon ref="fiveForm">
        <section style="width: 100%;">
          <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <h5 class="align-start">SEGUIMIENTO DEL NIÑO O NIÑA EXPUESTO - RIESGO DE TMI DEL VIH</h5>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
              <el-form-item label="Tipo regimen de salud" prop="tipoRegimenSalud" class="select-width">
                <el-select v-model="ruleFormCuartoReporte.tipoRegimenSalud" placeholder="Tipo regimen de salud">
                  <el-option label="Excepción" value="1" />
                  <el-option label="Contributivo" value="2" />
                  <el-option label="Subsidiado" value="3" />
                  <el-option label="Especial" value="4" />
                  <el-option label="No asegurado" value="5" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
              <el-form-item label="Nombre de la aseguradora" prop="nombreAseguradora">
                <el-input v-model="ruleFormCuartoReporte.nombreAseguradora" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
              <el-form-item label="Nombres y apellidos" prop="nombresApellidos">
                <el-input v-model="ruleFormCuartoReporte.nombresApellidos" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
              <el-form-item label="Tipo de documento" prop="tipoDocumento" class="select-width">
                <el-select v-model="ruleFormCuartoReporte.tipoDocumento" placeholder="Tipo de documento">
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
              <el-form-item label="Número de identificación" prop="numeroIdentificacion">
                <el-input v-model="ruleFormCuartoReporte.numeroIdentificacion" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
              <el-form-item label="Clasificación del riesgo" prop="clasificacionDelRiesgo" class="select-width">
                <el-select v-model="ruleFormCuartoReporte.clasificacionDelRiesgo" placeholder="Clasificación del riesgo">
                  <el-option label="Bajo riesgo" value="1" />
                  <el-option label="Alto riesgo" value="2" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
              <label class="me-2">Profilaxis anti retroviral</label>
              <el-radio-group v-model="ruleFormCuartoReporte.profilaxisAntriretroviral">
                <el-radio :label="1">Si</el-radio>
                <el-radio :label="0">No</el-radio>
              </el-radio-group>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
              <el-form-item label="Medicamentos anti retrovirales" prop="medicamentosAntiretrovirales"
                class="select-width">
                <el-select v-model="ruleFormCuartoReporte.medicamentosAntiretrovirales" multiple clearable collapse-tags
                  placeholder="Select" popper-class="custom-header" :max-collapse-tags="1">
                  <!--<template #header>
                  <el-checkbox v-model="checkAll" :indeterminate="indeterminate" @change="handleCheckAll">
                    All
                  </el-checkbox>
                </template>-->
                  <el-option v-for="item in medicamentos" :key="item.value" :label="item.label" :value="item.value" />
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
    <el-tab-pane label="Quinto reporte" name="six">
      <el-form :model="ruleFormquintoReporte" :rules="rulesFormQuintoReporte" label-width="180px" class="demo-ruleForm"
        :size="formSize" status-icon ref="sixForm">
        <section style="width: 100%;">
          <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <h5 class="align-start">PARACLINICOS REALIZADOS A LA NIÑA O NIÑO EXPUESTO AL RIESGO DE TMI DEL VIH</h5>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
              <el-form-item label="Prueba realizada" prop="pruebaRealizada" class="select-width">
                <el-select v-model="ruleFormquintoReporte.pruebaRealizada" placeholder="Prueba realizada">
                  <el-option label="ADN Proviral" value="1" />
                  <el-option label="Carga Viral" value="2" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="column-custom">
              <!--<el-form-item label="Fecha" prop="fecha">
                <el-input v-model="ruleFormquintoReporte.fecha" />
              </el-form-item>-->
              <label class="label-field" style="min-width:180px">Fecha</label>
              <el-date-picker v-model="ruleFormquintoReporte.fecha" type="date" placeholder="Fecha" :format="dateFormat"
                :size="size" />
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
              <el-form-item label="Resultados" prop="resultadoEnMl">
                <el-input v-model="ruleFormquintoReporte.resultadoEnMl" type="number" step="0.1" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
              <el-form-item label="Prueba realizada" prop="pruebaRealizadaTwo" class="select-width">
                <el-select v-model="ruleFormquintoReporte.pruebaRealizadaTwo" placeholder="Prueba realizada">
                  <el-option label="ADN Proviral" value="1" />
                  <el-option label="Carga Viral" value="2" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="column-custom">
              <!--<el-form-item label="Fecha" prop="fechaTwo">
                <el-input v-model="ruleFormquintoReporte.fechaTwo" />
              </el-form-item>-->
              <label class="label-field" style="min-width:180px">Fecha</label>
              <el-date-picker v-model="ruleFormquintoReporte.fechaTwo" type="date" placeholder="Fecha"
                :format="dateFormat" :size="size" />
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
              <el-form-item label="Resultados" prop="resultadoEnMlTwo">
                <el-input v-model="ruleFormquintoReporte.resultadoEnMlTwo" type="number" step="0.1" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
              <el-form-item label="Prueba realizada" prop="pruebaRealizadaThree" class="select-width">
                <el-select v-model="ruleFormquintoReporte.pruebaRealizadaThree" placeholder="Prueba realizada">
                  <el-option label="ADN Proviral" value="1" />
                  <el-option label="Carga Viral" value="2" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="column-custom">
              <!--<el-form-item label="Fecha" prop="fechaThree">
                <el-input v-model="ruleFormquintoReporte.fechaThree" />
              </el-form-item>-->
              <label class="label-field" style="min-width:180px">Fecha</label>
              <el-date-picker v-model="ruleFormquintoReporte.fechaThree" type="date" placeholder="Fecha"
                :format="dateFormat" :size="size" />
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
              <el-form-item label="Resultados" prop="resultadoEnMlThree">
                <el-input v-model="ruleFormquintoReporte.resultadoEnMlThree" type="number" step="0.1" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
              <el-form-item label="Prueba realizada" prop="pruebaRealizadaFour" class="select-width">
                <el-select v-model="ruleFormquintoReporte.pruebaRealizadaFour" placeholder="Prueba realizada">
                  <el-option label="ADN Proviral" value="1" />
                  <el-option label="Carga Viral" value="2" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="column-custom">
              <!--<el-form-item label="Fecha" prop="fechaFour">
                <el-input v-model="ruleFormquintoReporte.fechaFour" />
              </el-form-item>-->
              <label class="label-field" style="min-width:180px">Fecha</label>
              <el-date-picker v-model="ruleFormquintoReporte.fechaFour" type="date" placeholder="Fecha"
                :format="dateFormat" :size="size" />
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
              <el-form-item label="Resultados" prop="resultadoEnMlFour">
                <el-input v-model="ruleFormquintoReporte.resultadoEnMlFour" type="number" step="0.1" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
              <el-form-item label="Prueba realizada" prop="pruebaRealizadaFive" class="select-width">
                <el-select v-model="ruleFormquintoReporte.pruebaRealizadaFive" placeholder="Prueba realizada">
                  <el-option label="ADN Proviral" value="1" />
                  <el-option label="Carga Viral" value="2" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="column-custom">
              <!--<el-form-item label="Fecha" prop="fechaFive">
                <el-input v-model="ruleFormquintoReporte.fechaFive" />
              </el-form-item>-->
              <label class="label-field" style="min-width:180px">Fecha</label>
              <el-date-picker v-model="ruleFormquintoReporte.fechaFive" type="date" placeholder="Fecha"
                :format="dateFormat" :size="size" />
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
              <el-form-item label="Resultados" prop="resultadoEnMlFive">
                <el-input v-model="ruleFormquintoReporte.resultadoEnMlFive" type="number" step="0.1" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
              <el-form-item label="Prueba realizada" prop="pruebaRealizadaSix" class="select-width">
                <el-select v-model="ruleFormquintoReporte.pruebaRealizadaSix" placeholder="Prueba realizada">
                  <el-option label="ADN Proviral" value="1" />
                  <el-option label="Carga Viral" value="2" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="column-custom">
              <!--<el-form-item label="Fecha" prop="fechaSix">
                <el-input v-model="ruleFormquintoReporte.fechaSix" />
              </el-form-item>-->
              <label class="label-field" style="min-width:180px">Fecha</label>
              <el-date-picker v-model="ruleFormquintoReporte.fechaSix" type="date" placeholder="Fecha"
                :format="dateFormat" :size="size" />
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
              <el-form-item label="Resultados" prop="resultadoEnMlSix">
                <el-input v-model="ruleFormquintoReporte.resultadoEnMlSix" type="number" step="0.1" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
              <el-form-item label="Prueba realizada" prop="pruebaRealizadaSeven" class="select-width">
                <el-select v-model="ruleFormquintoReporte.pruebaRealizadaSeven" placeholder="Prueba realizada">
                  <el-option label="ADN Proviral" value="1" />
                  <el-option label="Carga Viral" value="2" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="column-custom">
              <!--<el-form-item label="Fecha" prop="fechaSeven">
                <el-input v-model="ruleFormquintoReporte.fechaSeven" />
              </el-form-item>-->
              <label class="label-field" style="min-width:180px">Fecha</label>
              <el-date-picker v-model="ruleFormquintoReporte.fechaSeven" type="date" placeholder="Fecha"
                :format="dateFormat" :size="size" />
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
              <el-form-item label="Resultados" prop="resultadoEnMlSeven">
                <el-input v-model="ruleFormquintoReporte.resultadoEnMlSeven" type="number" step="0.1" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <h5>SI A LA NIÑA o NIÑO EXPUESTOS SE LE REALIZARON OTRAS PRUEBAS, REGISTRE LA INFORMACION</h5>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
              <el-form-item label="Prueba realizada" prop="otrasPruebasRealizadasUno" class="select-width">
                <el-select v-model="ruleFormquintoReporte.otrasPruebasRealizadasUno" placeholder="Prueba realizada">
                  <el-option label="Prueba rapida" value="1" />
                  <el-option label="Elisa" value="2" />
                  <el-option label="Quimioluminiscencia" value="3" />
                  <el-option label="Western Blot" value="3" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="column-custom">
              <!--<el-form-item label="Fecha" prop="fechaProbablePartoUno">
                <el-input v-model="ruleFormquintoReporte.fechaProbablePartoUno" />
              </el-form-item>-->
              <label class="label-field" style="min-width:180px">Fecha</label>
              <el-date-picker v-model="ruleFormquintoReporte.fechaProbablePartoUno" type="date" placeholder="Fecha"
                :format="dateFormat" :size="size" />
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
              <el-form-item label="Resultados" prop="resultadosUno">
                <el-input v-model="ruleFormquintoReporte.resultadosUno" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
              <el-form-item label="Prueba realizada" prop="otrasPruebasRealizadasDos" class="select-width">
                <el-select v-model="ruleFormquintoReporte.otrasPruebasRealizadasDos" placeholder="Prueba realizada">
                  <el-option label="ADN Proviral" value="1" />
                  <el-option label="Carga Viral" value="2" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="column-custom">
              <!--<el-form-item label="Fecha" prop="fechaProbablePartoDos">
                <el-input v-model="ruleFormquintoReporte.fechaProbablePartoDos" />
              </el-form-item>-->
              <label class="label-field" style="min-width:180px">Fecha</label>
              <el-date-picker v-model="ruleFormquintoReporte.fechaProbablePartoDos" type="date" placeholder="Fecha"
                :format="dateFormat" :size="size" />
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
              <el-form-item label="Resultados" prop="resultadosDos">
                <el-input v-model="ruleFormquintoReporte.resultadosDos" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
              <el-form-item label="Prueba realizada" prop="otrasPruebasRealizadasTres" class="select-width">
                <el-select v-model="ruleFormquintoReporte.otrasPruebasRealizadasTres" placeholder="Prueba realizada">
                  <el-option label="ADN Proviral" value="1" />
                  <el-option label="Carga Viral" value="2" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="column-custom">
              <!--<el-form-item label="Fecha" prop="fechaProbablePartoTres">
                <el-input v-model="ruleFormquintoReporte.fechaProbablePartoTres" />
              </el-form-item>-->
              <label class="label-field" style="min-width:180px">Fecha</label>
              <el-date-picker v-model="ruleFormquintoReporte.fechaProbablePartoTres" type="date" placeholder="Fecha"
                :format="dateFormat" :size="size" />
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
              <el-form-item label="Resultados" prop="resultadosTres">
                <el-input v-model="ruleFormquintoReporte.resultadosTres" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
              <el-form-item label="Prueba realizada" prop="otrasPruebasRealizadasCuatro" class="select-width">
                <el-select v-model="ruleFormquintoReporte.otrasPruebasRealizadasCuatro" placeholder="Prueba realizada">
                  <el-option label="ADN Proviral" value="1" />
                  <el-option label="Carga Viral" value="2" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="column-custom">
              <!--<el-form-item label="Fecha" prop="fechaProbablePartoCuatro">
                <el-input v-model="ruleFormquintoReporte.fechaProbablePartoCuatro" />
              </el-form-item>-->
              <label class="label-field" style="min-width:180px">Fecha</label>
              <el-date-picker v-model="ruleFormquintoReporte.fechaProbablePartoCuatro" type="date" placeholder="Fecha"
                :format="dateFormat" :size="size" />
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
              <el-form-item label="Resultados" prop="resultadosCuatro">
                <el-input v-model="ruleFormquintoReporte.resultadosCuatro" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <h5>ALIMENTACIÓN DE LA NIÑA O NIÑO EXPUESTO AL VIH</h5>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <el-form-item label="Prueba realizada" prop="otrasPruebasRealizadasCuatro" class="select-width">
                <el-select v-model="ruleFormquintoReporte.otrasPruebasRealizadasCuatro" placeholder="Prueba realizada">
                  <el-option label="Formula lactea desde el nacimiento - GPC" value="1" />
                  <el-option label="Lactancia materna exclusiva" value="2" />
                  <el-option label="Alimentación mixta: lactancia materna + formula láctea" value="3" />
                  <el-option label="Alimentación parenteral" value="4" />
                  <el-option label="Alimentación parenteral + formula láctea" value="5" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <h5>SITUACIÓN DEL NIÑO O NIÑA EXPUESTO CON REFERENCIA AL VIH</h5>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <el-form-item label="Prueba realizada" prop="otrasPruebasRealizadasCuatro" class="select-width">
                <el-select v-model="ruleFormquintoReporte.otrasPruebasRealizadasCuatro" placeholder="Prueba realizada">
                  <el-option label="Niña o niño con infección confirmada por VIH" value="1" />
                  <el-option label="Niña o niño con infección por VIH descartada, (Sano)" value="2" />
                  <el-option label="Niña o niño fallecio sin clasificación para VIH" value="3" />
                  <el-option label="Niña o niño sin clasificación frente al VIH" value="4" />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row class="row-bg" justify="end">
            <div class="btn-save">
              <el-button type="primary" size="default" @click="submitForm(sixForm, 'seven')">guardar y
                continuar</el-button>
            </div>
          </el-row>
        </section>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="Seguimiento" name="seven">
      <el-form :model="ruleFormSeguimiento" :rules="rulesFormSeguimiento" label-width="180px" class="demo-ruleForm"
        :size="formSize" status-icon ref="sevenForm">
        <section style="width: 100%;">
          <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <h5 class="align-start">REPORTE DE DATOS DEL SEGUIMIENTO AL BINOMIO MADRE/HIJO. IPS DE ATENCIÓN EN VIH
              </h5>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
              <el-form-item label="Ips atención en VIH" prop="ipsAtencionVih">
                <el-input v-model="ruleFormSeguimiento.ipsAtencionVih" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
              <el-form-item label="Nombre de quien remite la información" prop="nombreQuienRemiteInformacion">
                <el-input v-model="ruleFormSeguimiento.nombreQuienRemiteInformacion" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
              <el-form-item label="Cargo de quien remite la información" prop="cargoQuienRemiteInformacion">
                <el-input v-model="ruleFormSeguimiento.cargoQuienRemiteInformacion" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
              <el-form-item label="Celular" prop="celular">
                <el-input v-model="ruleFormSeguimiento.celular" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
              <el-form-item label="Teléfono fijo" prop="telFijo">
                <el-input v-model="ruleFormSeguimiento.telFijo" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
              <el-form-item label="Correo" prop="correo">
                <el-input v-model="ruleFormSeguimiento.correo" type="email" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
              <el-form-item label="Confirmar correo" prop="confirmCorreo">
                <el-input v-model="ruleFormSeguimiento.confirmCorreo" type="email" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row class="row-bg" justify="end">
            <div class="btn-save">
              <el-button type="primary" size="default" @click="submitForm(sevenForm, 'end')">guardar y
                continuar</el-button>
            </div>
          </el-row>
        </section>
      </el-form>
    </el-tab-pane>
  </el-tabs>

  <!--<el-button style="margin-top: 12px" @click="next">Next step</el-button>-->
</template>

 
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import 'element-plus/theme-chalk/display.css'
//import { ref } from 'vue' 
import { reactive, ref } from 'vue'
import type { FormRules, FormProps } from 'element-plus'
import { ElMessage, ElMessageBox } from 'element-plus'
import type { TabsPaneContext, ElForm } from 'element-plus'
import type { CheckboxValueType } from 'element-plus'
import { RuleFormDatosGestante, RuleFormPrimerReporte, RuleFormSegundoReporte, RuleFormTercerReporte, RuleFormCuartoReporte, RuleFormquintoReporte, RuleFormSeguimiento } from '@/interfaces/modeloVih'
import { IParaclinicoMadre, IParametrica, IReporte1, IReporte2 } from "@/api/ETMIPLUS_API";
import moment from 'moment';
import * as ETMIPLUS_API from "@/api/ETMIPLUS_API";
import axios from 'axios';

type FormInstance = InstanceType<typeof ElForm>

@Options({
  components: {},
})

export default class VihView extends Vue {

  collapseReportes = ['1']
  activeName = 'second'
  paraClinicoActivo = 'first'
  disabledTwo = false
  disabledThree = true
  disabledFour = true
  disabledFive = true
  disabledSix = true
  disabledSeven = true
  isVisible = false
  dateFormat = 'DD/MM/YYYY'

  checkAll = false
  indeterminate = false
  value = ref<CheckboxValueType[]>([])

  positionVihForm = "top"
  labelPositionVihForm = ref<FormProps['labelPosition']>('top')
  ETMIPLUS_API_Client = new ETMIPLUS_API.EtmiPlusClient(process.env.VUE_APP_APIURL, axios);
  size = 'default'

  /*onResize(): void {
    // Handle screen resize logic here
    // You can access the window size using `window.innerWidth` and `window.innerHeight`
    console.log('tamaño window', window.innerWidth)
    if (window.innerWidth <= 991) {
      this.positionVihForm = "top";
      this.labelPositionVihForm = ref<FormProps['labelPosition']>('top')
    } else {
      this.positionVihForm = "right";
      this.labelPositionVihForm = ref<FormProps['labelPosition']>('right')
      //this.labelPosition = ref<FormProps['labelPosition']>(this.position)
    }
  }

  mounted(): void {
    //window.addEventListener('resize', this.onResize);
    if (window.innerWidth <= 991) {
      this.positionVihForm = 'top';
      this.labelPositionVihForm = ref<FormProps['labelPosition']>('top')
    } else {
      this.positionVihForm = 'right';
      this.labelPositionVihForm = ref<FormProps['labelPosition']>('right')
      //this.labelPosition = ref<FormProps['labelPosition']>(this.position)
    }
  }*/
  idGestanteCtrl: number | undefined = 0;
  mounted() {
    // Access the 'id' param from the router
    const gestanteCtrl = this.$route.params.idGCtrl;
    // Use the 'id' param as needed
    this.idGestanteCtrl = Number(gestanteCtrl);
    console.log('id gestante', gestanteCtrl);

    this.toggleEnableBoolean1()
  }

  paraClinicosFields = [{ examenParaClinico: [], fechaExamenParaClinico: new Date(), resultadoParaclinico: '', valid: true }]

  addFields() {
    this.paraClinicosFields.push({ examenParaClinico: [], fechaExamenParaClinico: new Date(), resultadoParaclinico: '', valid: true });
  }

  validarParaClinicos = false;

  validateField = (index: number) => {
    const field = this.paraClinicosFields[index];
    console.log('validador', field)
    field.valid = field.examenParaClinico && field.fechaExamenParaClinico !== null && field.resultadoParaclinico !== '';
    console.log(field.valid)
    this.validarParaClinicos = field.valid
  };

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

  ruleFormPrimerReporte = reactive<RuleFormPrimerReporte>({
    momentoDiagnostico: [],
    fechaDiagnostico: new Date(),
    idResultados: 0,
    numeroCopias: 0,
    estabaRecibiendoTARAntesEmbarazo: 0,
    recibioTARDuranteEmbarazo: 0,
    edadGestacionalInicioTARSemanas: 0,
    estabaRecibiendoTARDuranteEmbarazoActual: 0,
    edadGestacionalCuandoRecibioTAR: 0,
    edadGestacionalAlDianosticoVIHSemanas: 0,
    medicamentosARVSuministrados: '',
    seRealizoControlPrenatalDuranteEmbarazo: 0,
    edadGestacionalPrimerControlPrenatalSemanas: 0,
    fechaProbableParto: new Date(),
    listParaclinicos: []
  })

  ruleFormSegundoReporte = reactive<IReporte2>({
    tieneCargaViral: 0,
    fechaResultado: new Date(),
    resultadoCargaViral: 0
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

  ruleFormCuartoReporte = reactive<RuleFormCuartoReporte>({
    tipoRegimenSalud: [],
    nombreAseguradora: '',
    nombresApellidos: '',
    tipoDocumento: [],
    numeroIdentificacion: '',
    clasificacionDelRiesgo: [],
    profilaxisAntriretroviral: false,
    medicamentosAntiretrovirales: []
  })

  ruleFormquintoReporte = reactive<RuleFormquintoReporte>({
    pruebaRealizada: [],
    fecha: new Date,
    resultadoEnMl: 0,
    pruebaRealizadaTwo: [],
    fechaTwo: new Date,
    resultadoEnMlTwo: 0,
    pruebaRealizadaThree: [],
    fechaThree: new Date,
    resultadoEnMlThree: 0,
    pruebaRealizadaFour: [],
    fechaFour: new Date,
    resultadoEnMlFour: 0,
    pruebaRealizadaFive: [],
    fechaFive: new Date,
    resultadoEnMlFive: 0,
    pruebaRealizadaSix: [],
    fechaSix: new Date,
    resultadoEnMlSix: 0,
    pruebaRealizadaSeven: [],
    fechaSeven: new Date,
    resultadoEnMlSeven: 0,
    otrasPruebasRealizadasUno: [],
    otrasPruebasRealizadasDos: [],
    otrasPruebasRealizadasTres: [],
    otrasPruebasRealizadasCuatro: [],
    fechaProbablePartoUno: new Date,
    fechaProbablePartoDos: new Date,
    fechaProbablePartoTres: new Date,
    fechaProbablePartoCuatro: new Date,
    resultadosUno: 0,
    resultadosDos: 0,
    resultadosTres: 0,
    resultadosCuatro: 0,
    alimentacionMenorExpuesto: [],
    situacionDelMenorExpuesto: [],
  })

  ruleFormSeguimiento = reactive<RuleFormSeguimiento>({
    ipsAtencionVih: '',
    nombreQuienRemiteInformacion: '',
    cargoQuienRemiteInformacion: '',
    celular: '',
    telFijo: '',
    correo: '',
    confirmCorreo: '',
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

  rulesFormPrimerReporte = reactive<FormRules<RuleFormPrimerReporte>>({
    momentoDiagnostico: [
      {
        required: true,
        message: 'Por favor seleccione el momento de diagnostico',
        trigger: 'change',
      },
    ],
    pruebaConfirmarVih: [
      {
        required: true,
        message: 'Por favor seleccione la prueba de confirmación VIH',
        trigger: 'change',
      },
    ],
    idResultados: [
      {
        required: true,
        message: 'Por favor seleccione el resultado de la prueba',
        trigger: 'change',
      },
    ],
    fechaProbableParto: [
      { required: true, message: 'Por favor ingrese la fecha probable de parto', trigger: 'blur' }
    ],
    listParaclinicos: [
      {
        required: true,
        message: 'Por favor seleccione una opción',
        trigger: 'change',
      },
    ],
    numeroCopias: [
      { required: true, message: 'Esté campo es requerido', trigger: 'blur' }
    ],
    fechaDiagnostico: [
      { required: true, message: 'Por favor ingrese la fecha del diagnóstico', trigger: 'blur' }
    ],
    estabaRecibiendoTARAntesEmbarazo: [
      {
        required: true,
        message: 'Por favor seleccione una opción',
        trigger: 'change',
      },
    ],
    recibioTARDuranteEmbarazo: [
      {
        required: true,
        message: 'Por favor seleccione una opción',
        trigger: 'change',
      },
    ],
    edadGestacionalInicioTARSemanas: [
      {
        required: true,
        message: 'Por favor indique la semana',
        trigger: 'blur',
      },
    ],
    estabaRecibiendoTARDuranteEmbarazoActual: [
      {
        required: true,
        message: 'Por favor seleccione una opción',
        trigger: 'change',
      },
    ],
    edadGestacionalCuandoRecibioTAR: [
      {
        required: true,
        message: 'Por favor seleccione una opción',
        trigger: 'change',
      },
    ],
    edadGestacionalAlDianosticoVIHSemanas: [
      {
        required: true,
        message: 'Por favor indique la semana',
        trigger: 'change',
      },
    ],
    medicamentosARVSuministrados: [
      {
        required: true,
        message: 'Por favor seleccione los medicamentos sumnistrados',
        trigger: 'change',
      },
    ],
    seRealizoControlPrenatalDuranteEmbarazo: [
      { required: true, message: 'Por favor indique el primer control en semanas', trigger: 'blur' }
    ],
    edadGestacionalPrimerControlPrenatalSemanas: [
      { required: true, message: 'Por favor indique la fecha probable del parto', trigger: 'blur' }
    ]
  })

  rulesFormSegundoReporte = reactive<FormRules<IReporte2>>({
    tieneCargaViral: [
      {
        required: true,
        message: 'Por favor seleccione si tiene carga viral',
        trigger: 'change',
      },
    ],
    fechaResultado: [
      {
        required: true,
        message: 'Por favor seleccione una fecha',
        trigger: 'blur',
      },
    ],
    resultadoCargaViral: [
      {
        required: true,
        message: 'Solo se aceptan valores númericos',
        trigger: 'blur',
      },
    ],
  })

  rulesFormTercerReporte = reactive<FormRules<RuleFormTercerReporte>>({
    situacionGestante: [
      {
        required: true,
        message: 'Seleccione la situación de la gestante',
        trigger: 'change',
      }
    ],
    fechaDelParto: [
      {
        required: true,
        message: 'Seleccione una fecha de parto',
        trigger: 'blur',
      }
    ],
    tarEnInterparto: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'blur',
      }
    ],
    esquemaArvEnInterparto: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'change'
      }
    ],
    condicionRecienNacido: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'change'
      }
    ],
    numeroDeProductosAlNacimiento: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'change'
      }
    ],
    edadGestacionalAlNacimientoEnSemana: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'blur',
      }
    ],
    pesoEnGramos: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'blur',
      }
    ],
    sexo: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'change',
      }
    ],
    tipoParto: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'change',
      }
    ],
    suprecionDeLactancia: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'change',
      }
    ],
    medicamentoSuministrado: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'change',
      }
    ],
    otroMedicamento: [
      {
        required: false,
        message: 'Ingrese el nombre de otro medicamento',
        trigger: 'blur',
      }
    ],
  })

  rulesFormCuartoReporte = reactive<FormRules<RuleFormCuartoReporte>>({
    tipoRegimenSalud: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'change',
      }
    ],
    nombreAseguradora: [
      {
        required: true,
        message: 'Este campo es requerido',
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
        trigger: 'blur',
      }
    ],
    clasificacionDelRiesgo: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'change',
      }
    ],
    profilaxisAntriretroviral: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'change',
      }
    ],
    medicamentosAntiretrovirales: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'change',
      }
    ]
  })

  rulesFormQuintoReporte = reactive<FormRules<RuleFormquintoReporte>>({
    pruebaRealizada: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'change',
      }
    ],
    fecha: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'blur',
      }
    ],
    resultadoEnMl: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'blur',
      }
    ],
    pruebaRealizadaTwo: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'change',
      }
    ],
    fechaTwo: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'blur',
      }
    ],
    resultadoEnMlTwo: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'blur',
      }
    ],
    pruebaRealizadaThree: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'change',
      }
    ],
    fechaThree: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'blur',
      }
    ],
    resultadoEnMlThree: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'blur',
      }
    ],
    pruebaRealizadaFour: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'change',
      }
    ],
    fechaFour: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'blur',
      }
    ],
    resultadoEnMlFour: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'blur',
      }
    ],
    pruebaRealizadaFive: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'change',
      }
    ],
    fechaFive: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'blur',
      }
    ],
    resultadoEnMlFive: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'blur',
      }
    ],
    pruebaRealizadaSix: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'change',
      }
    ],
    fechaSix: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'blur',
      }
    ],
    resultadoEnMlSix: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'blur',
      }
    ],
    pruebaRealizadaSeven: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'change',
      }
    ],
    fechaSeven: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'blur',
      }
    ],
    resultadoEnMlSeven: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'blur',
      }
    ],
    otrasPruebasRealizadasUno: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'change',
      }
    ],
    otrasPruebasRealizadasDos: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'change',
      }
    ],
    otrasPruebasRealizadasTres: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'change',
      }
    ],
    otrasPruebasRealizadasCuatro: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'change',
      }
    ],
    fechaProbablePartoUno: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'blur',
      }
    ],
    fechaProbablePartoDos: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'blur',
      }
    ],
    fechaProbablePartoTres: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'blur',
      }
    ],
    fechaProbablePartoCuatro: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'blur',
      }
    ],
    resultadosUno: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'blur',
      }
    ],
    resultadosDos: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'blur',
      }
    ],
    resultadosTres: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'blur',
      }
    ],
    resultadosCuatro: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'blur',
      }
    ],
    alimentacionMenorExpuesto: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'change',
      }
    ],
    situacionDelMenorExpuesto: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'change',
      }
    ],
  })

  validateEmail = (rule: any, value: any, callback: any) => {
    if (value === '') {
      callback(new Error('Please input the password'))
    } else {
      if (this.ruleFormSeguimiento.correo !== '') {
        if (!this.firstForm.value) return
        this.firstForm.value.validateField('confirmCorreo', () => null)
      }
      callback()
    }
  }

  validateEmail2 = (rule: any, value: any, callback: any) => {
    console.log('valor', value)
    if (value === '') {
      callback(new Error('Confirme el correo ingresado'))
    } else if (value !== this.ruleFormSeguimiento.correo) {
      callback(new Error("Los correos ingresados no coinciden"))
    } else {
      callback()
    }
  }

  rulesFormSeguimiento = reactive<FormRules<RuleFormSeguimiento>>({
    ipsAtencionVih: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'blur',
      }
    ],
    nombreQuienRemiteInformacion: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'blur',
      }
    ],
    cargoQuienRemiteInformacion: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'blur',
      }
    ],
    celular: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'blur',
      }
    ],
    telFijo: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'blur',
      }
    ],
    correo: [
      {
        required: true,
        message: 'Este campo es requerido',
        trigger: 'blur',
      },
      {
        type: 'email',
        message: 'Ingrese un correo válido',
        trigger: ['blur', 'change'],
      }
    ],
    confirmCorreo: [
      {
        type: 'email',
        required: true,
        trigger: 'blur',
        validator: this.validateEmail2
      }
    ]
  })

  handleClick(tab: TabsPaneContext, event: Event) {
    console.log(tab, event)
  }

  handleCheckAll(val: CheckboxValueType) {
    this.indeterminate = false
    if (val) {
      this.value.value = this.medicamentos.map((_) => _.value)
    } else {
      this.value.value = []
    }
  }

  watch({ value }: { value: any; }) {
    if (value.length === 0) {
      this.checkAll = false
      this.indeterminate = false
    } else if (value.length === this.medicamentos.length) {
      this.checkAll = true
      this.indeterminate = false
    } else {
      this.indeterminate = true
    }
  }

  async registroReporte(reporteForm: any, tabName: any) {
    console.log(reporteForm)

    if (tabName === 'third') {
      const requestPrimerReporte = await this.ETMIPLUS_API_Client.reporte1(reporteForm.idGestanteControl, reporteForm) as any;
      console.log('response', requestPrimerReporte)


      if (requestPrimerReporte.length !== 0) {
        const message = 'Reporte guardado con éxito.'
        this.showMessage(message).then(() => {
          ElMessage.info(message);
          this.activeName = tabName;
        });
      } else {
        const message = 'Se presentó un error. Verifiqué la información e intenté de nuevo.'
        this.showMessage(message).then(() => {
          ElMessage.info(message);
          this.activeName = tabName;
        });
      }

    } else if (tabName === 'four') {
      const requestPrimerReporte = await this.ETMIPLUS_API_Client.reporte2(reporteForm.idGestanteControl, reporteForm) as any;
      console.log('response', requestPrimerReporte)


      if (requestPrimerReporte.length !== 0) {
        const message = 'Reporte guardado con éxito.'
        this.showMessage(message).then(() => {
          ElMessage.info(message);
          this.activeName = tabName;
        });
      } else {
        const message = 'Se presentó un error. Verifiqué la información e intenté de nuevo.'
        this.showMessage(message).then(() => {
          ElMessage.info(message);
          this.activeName = tabName;
        });
      }
    }


  }

  changeTab(tabName: string) {

    //console.log(tabName, document.getElementById('tab-'+tabName))
    //document.getElementById('tab-'+tabName)?.classList.remove('is-disabled')
    //console.log(document.getElementById('tab-'+tabName))
    //const elTabComponent = this.$refs.elTab2 as HTMLElement; // Or use querySelector if necessary
    //const elTabComponent: HTMLElement = (this.$refs.elTab2 as any) as HTMLElement;
    if (tabName === 'second') {
      this.disabledTwo = false
      this.activeName = tabName;
    } else if (tabName === 'third') {
      //console.log('valor del formulario', this.rulesFormPrimerReporte)
      if (this.validarParaClinicos) {
        console.log('enviando!')

        //console.log(fields)
        console.log('paraclinicos', this.paraClinicosFields)
        const valueParaclinicos = this.paraClinicosFields

        console.log('value paraclinicos', valueParaclinicos)

        const makeListaParaClinicos: IParaclinicoMadre[] = []

        valueParaclinicos.map((fieldValue: any) => {


          makeListaParaClinicos.push(
            {
              idParaclinico: Number(fieldValue.examenParaClinico),
              fechaParaclinico: new Date(moment(fieldValue.fechaExamenParaClinico).format('YYYY-MM-DD HH:mm:ss.sss')),
              resultadoParaclinico: fieldValue.resultadoParaclinico
            }
          )

        });
        console.log('makeListaParaClinicos', makeListaParaClinicos)

        const request: IReporte1 = {
          idReporte: 0,
          idGestanteControl: this.idGestanteCtrl,
          idMomentoDiagnostico: Number(this.ruleFormPrimerReporte.momentoDiagnostico),
          idPruebaConfirmarVih: Number(this.ruleFormPrimerReporte.pruebaConfirmarVih),
          fechaDiagnostico: new Date(moment(this.ruleFormPrimerReporte.fechaDiagnostico).format('YYYY-MM-DD HH:mm:ss.sss')),
          idResultados: Number(this.ruleFormPrimerReporte.idResultados),
          numeroCopias: Number(this.ruleFormPrimerReporte.numeroCopias),
          estabaRecibiendoTARAntesEmbarazo: Number(this.ruleFormPrimerReporte.estabaRecibiendoTARAntesEmbarazo),
          recibioTARDuranteEmbarazo: Number(this.ruleFormPrimerReporte.recibioTARDuranteEmbarazo),
          estabaRecibiendoTARDuranteEmbarazoActual: Number(this.ruleFormPrimerReporte.estabaRecibiendoTARDuranteEmbarazoActual),
          edadGestacionalInicioTARSemanas: Number(this.ruleFormPrimerReporte.edadGestacionalInicioTARSemanas),
          edadGestacionalAlDianosticoVIHSemanas: Number(this.ruleFormPrimerReporte.edadGestacionalAlDianosticoVIHSemanas),
          medicamentosARVSuministrados: JSON.stringify(this.ruleFormPrimerReporte.medicamentosARVSuministrados),
          seRealizoControlPrenatalDuranteEmbarazo: Number(this.ruleFormPrimerReporte.seRealizoControlPrenatalDuranteEmbarazo),
          edadGestacionalPrimerControlPrenatalSemanas: Number(this.ruleFormPrimerReporte.edadGestacionalPrimerControlPrenatalSemanas),
          fechaProbableParto: new Date(moment(this.ruleFormPrimerReporte.fechaProbableParto).format('YYYY-MM-DD HH:mm:ss.sss')),
          listParaclinicos: makeListaParaClinicos
        }
        this.registroReporte(request, tabName)

      } else {
        ElMessageBox.alert(`Por favor complete los campos paraclinicos`, { type: "warning" });
      }

      //this.disabledThree = false
    } else if (tabName === 'four') {
      this.disabledFour = false
      //this.activeName = tabName

      const request: IReporte2 = {
        idReporte: 0,
        idGestanteControl: Number(this.idGestanteCtrl),
        tieneCargaViral: Number(this.ruleFormSegundoReporte.tieneCargaViral),
        fechaResultado: this.ruleFormSegundoReporte.fechaResultado,
        resultadoCargaViral: Number(this.ruleFormSegundoReporte.resultadoCargaViral)
      }
      this.registroReporte(request, tabName)

    } else if (tabName === 'five') {
      this.disabledFive = false
      this.activeName = tabName
    } else if (tabName === 'six') {
      this.disabledSix = false
      this.activeName = tabName
    } else if (tabName === 'seven') {
      this.disabledSeven = false
      this.activeName = tabName
    }

    //console.log(elTabComponent)
  }

  formSize = 'default'
  firstForm = ref<FormInstance>()
  secondForm = ref<FormInstance>()
  thirdForm = ref<FormInstance>()
  fourForm = ref<FormInstance>()
  fiveForm = ref<FormInstance>()
  sixForm = ref<FormInstance>()
  sevenForm = ref<FormInstance>()
  //ruleFormRef = this.$refs.FormRef


  submitForm = async (formEl: FormInstance | undefined, tab: string) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
      if (valid) {

        console.log('enviando!')
        if (tab !== 'end') {
          //console.log(fields)
          this.changeTab(tab)
        } else {
          //console.log('valor a guardar', this.ruleFormDatosGestante)
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

  options = Array.from({ length: 10000 }).map((_, idx) => ({
    value: `${idx + 1}`,
    label: `${idx + 1}`,
  }))

  showCopiasMlMomentoDiagn = true

  toggleDiv() {
    console.log('que llega', this.ruleFormPrimerReporte.pruebaConfirmarVih)
    if (Number(this.ruleFormPrimerReporte.pruebaConfirmarVih) === 1) {
      this.showCopiasMlMomentoDiagn = false;

    } else {
      this.showCopiasMlMomentoDiagn = true
    }

  }

  enableRecibioTarEmbarazo = true
  enableSemanaRecibioTar = true

  toggleEnableBoolean1() {
    if (Number(this.ruleFormPrimerReporte.estabaRecibiendoTARAntesEmbarazo) === 0) {
      this.enableRecibioTarEmbarazo = false
    } else {
      this.enableRecibioTarEmbarazo = true
      this.enableSemanaRecibioTar = true
    }
  }

  toggleEnableBoolean2() {
    if (Number(this.ruleFormPrimerReporte.recibioTARDuranteEmbarazo) === 1) {
      this.enableSemanaRecibioTar = false
    } else {
      this.enableSemanaRecibioTar = true
    }
  }

  enableRecibioTarDurantEmbarazo = true
  edadGestancionalDiagnostico = true

  toggleEnableBoolean3() {
    if (Number(this.ruleFormPrimerReporte.estabaRecibiendoTARDuranteEmbarazoActual) === 1) {
      this.enableRecibioTarDurantEmbarazo = false
      this.edadGestancionalDiagnostico = false
    } else {
      this.enableRecibioTarDurantEmbarazo = true
      this.edadGestancionalDiagnostico = true
    }
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

.w-100 {
  width: 100%
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
  display: flex !important;
  align-items: start !important;
  align-self: start !important;
  text-align: left !important;
}

.btn-save {
  margin: 20px 0 0
}

.no-margin {
  margin: 0 0 0 0 !important
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
  font-size: .8rem;
  padding-right: 3px;
  margin-bottom: 18px;
  font-weight: lighter !important;
}

.column-custom {
  display: flex !important;
  align-items: start;
  align-self: start
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

.el-form-item__error {
  text-align: left !important;
}
</style>