<template class="steps-container">
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="Datos gestante" name="first" ref="elTab1">

      <el-form :model="ruleFormDatosGestante" :rules="rulesDatosGestante" style="width: 100%;" label-width="180px"
        class="demo-ruleForm" :size="formSize" status-icon ref="firstForm" :label-position="labelPositionVihForm">
        <section style="width: 100%;">
          <el-row :gutter="10" style="width: 100%;">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <h5 class="align-start">DATOS DE LA GESTANTE CON DIAGNOSTICO DE VIH</h5>
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
                <el-select v-model="ruleFormDatosGestante.tipoDocumento" placeholder="Tipo de Documento">
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
              <el-form-item label="Tipo de regimen de salud" prop="tipoRegimenSalud" class="select-width">
                <el-select v-model="ruleFormDatosGestante.tipoRegimenSalud" placeholder="Tipo de regimen de salud">
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
                <el-select v-model="ruleFormDatosGestante.pertenenciaEtnica" placeholder="Pertenencia etnica">
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
                <el-select v-model="ruleFormDatosGestante.grupoPoblacional" placeholder="Grupo poblacional">
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
                <el-select v-model="ruleFormDatosGestante.areaOcurrencia" placeholder="Area de ocurrencia">
                  <el-option label="Cabecera municipal" value="1" />
                  <el-option label="Centro poblado" value="2" />
                  <el-option label="Rural disperso" value="3" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
              <el-form-item label="Departamento de residencia" prop="dptoResidencia" class="select-width">
                <el-select v-model="ruleFormDatosGestante.dptoResidencia" placeholder="Departamento de residencia">
                  <el-option label="Colombia" value="1" />
                  <el-option label="Panama" value="2" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
              <el-form-item label="Municipio de residencia" prop="municipioResidencia" class="select-width">
                <el-select v-model="ruleFormDatosGestante.municipioResidencia" placeholder="Municipio de residencia">
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
              <el-form-item label="Departamento donde recibe atención" prop="dptoAtencion" class="select-width">
                <el-select v-model="ruleFormDatosGestante.dptoAtencion" placeholder="Departamento donde recibe atención">
                  <el-option label="Colombia" value="1" />
                  <el-option label="Panama" value="2" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
              <el-form-item label="Municipio donde recibe atención" prop="municipioAtencion" class="select-width">
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
    <el-tab-pane label="Primer reporte" name="second" :disabled="disabledTwo" ref="elTab2">

      <el-form :model="ruleFormPrimerReporte" ref="secondForm" :rules="rulesFormPrimerReporte" label-width="180px"
        status-icon size="default" class="demo-ruleForm">
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
              <el-form-item label="Prueba confirmación de VIH" prop="pruebaConfVih" class="select-width">
                <el-select v-model="ruleFormPrimerReporte.pruebaConfVih" placeholder="Prueba confirmación de VIH">
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
              <label class="label-field" style="min-width:180px">Fecha probable del parto</label>
              <el-date-picker v-model="ruleFormTercerReporte.fechaDelParto" type="date"
                placeholder="Fecha probable del parto" :format="dateFormat" :size="size" />
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
              <el-form-item label="Resultado: copias/mls" prop="resultados">
                <el-input v-model="ruleFormPrimerReporte.resultados" type="number" step="0.1" />
              </el-form-item>
            </el-col>
            <el-divider />
            <el-col :span="8">
              <el-form-item label="Examen" prop="examenParaclinicoMl1">
                <el-input v-model="ruleFormPrimerReporte.examenParaclinicoMl1" />
              </el-form-item>
            </el-col>
            <el-col :span="8" class="column-custom">
              <!--<el-form-item label="Fecha" prop="fechaExamenMl1">
                <el-input v-model="ruleFormPrimerReporte.fechaExamenMl1" />
              </el-form-item>-->
              <label class="label-field" style="min-width:180px">Fecha</label>
              <el-date-picker v-model="ruleFormPrimerReporte.fechaExamenMl1" type="date" placeholder="Fecha"
                :format="dateFormat" :size="size" />
            </el-col>
            <el-col :span="8">
              <el-form-item label="Resultado: copias/mls" prop="resultadosExamenMl1">
                <el-input v-model="ruleFormPrimerReporte.resultadosExamenMl1" type="number" step="0.1" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="Examen" prop="examenParaclinicoMl2">
                <el-input v-model="ruleFormPrimerReporte.examenParaclinicoMl2" />
              </el-form-item>
            </el-col>
            <el-col :span="8" class="column-custom">
              <!--<el-form-item label="Fecha" prop="fechaExamenMl2">
                <el-input v-model="ruleFormPrimerReporte.fechaExamenMl2" />
              </el-form-item>-->
              <label class="label-field" style="min-width:180px">Fecha</label>
              <el-date-picker v-model="ruleFormPrimerReporte.fechaExamenMl2" type="date" placeholder="Fecha"
                :format="dateFormat" :size="size" />
            </el-col>
            <el-col :span="8">
              <el-form-item label="Resultado: copias/mls" prop="resultadosExamenMl2">
                <el-input v-model="ruleFormPrimerReporte.resultadosExamenMl2" type="number" step="0.1" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="Examen" prop="examenParaclinicoMl3">
                <el-input v-model="ruleFormPrimerReporte.examenParaclinicoMl3" />
              </el-form-item>
            </el-col>
            <el-col :span="8" class="column-custom">
              <!--<el-form-item label="Fecha" prop="fechaExamenMl3">
                <el-input v-model="ruleFormPrimerReporte.fechaExamenMl3" />
              </el-form-item>-->
              <label class="label-field" style="min-width:180px">Fecha</label>
              <el-date-picker v-model="ruleFormPrimerReporte.fechaExamenMl3" type="date" placeholder="Fecha"
                :format="dateFormat" :size="size" />
            </el-col>
            <el-col :span="8">
              <el-form-item label="Resultado: copias/mls" prop="resultadosExamenMl3">
                <el-input v-model="ruleFormPrimerReporte.resultadosExamenMl3" type="number" step="0.1" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="Examen" prop="examenParaclinicoMl4">
                <el-input v-model="ruleFormPrimerReporte.examenParaclinicoMl4" />
              </el-form-item>
            </el-col>
            <el-col :span="8" class="column-custom">
              <!--<el-form-item label="Fecha" prop="fechaExamenMl4">
                <el-input v-model="ruleFormPrimerReporte.fechaExamenMl4" />
              </el-form-item>-->
              <label class="label-field" style="min-width:180px">Fecha</label>
              <el-date-picker v-model="ruleFormPrimerReporte.fechaExamenMl4" type="date" placeholder="Fecha"
                :format="dateFormat" :size="size" />
            </el-col>
            <el-col :span="8">
              <el-form-item label="Resultado: copias/ml" prop="resultadosExamenMl4">
                <el-input v-model="ruleFormPrimerReporte.resultadosExamenMl4" type="number" step="0.1" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="Examen" prop="examenParaclinicoMl5">
                <el-input v-model="ruleFormPrimerReporte.examenParaclinicoMl5" />
              </el-form-item>
            </el-col>
            <el-col :span="8" class="column-custom">
              <!--<el-form-item label="Fecha" prop="fechaExamenMl5">
                <el-input v-model="ruleFormPrimerReporte.fechaExamenMl5" />
              </el-form-item>-->
              <label class="label-field" style="min-width:180px">Fecha</label>
              <el-date-picker v-model="ruleFormPrimerReporte.fechaExamenMl5" type="date" placeholder="Fecha"
                :format="dateFormat" :size="size" />
            </el-col>
            <el-col :span="8">
              <el-form-item label="Resultados: copias/ml" prop="resultadosExamenMl5">
                <el-input v-model="ruleFormPrimerReporte.resultadosExamenMl5" type="number" step="0.1" />
              </el-form-item>
            </el-col>
            <el-divider />
            <el-col :span="8">
              <el-form-item label="Examen" prop="examenParaclinicoMm1">
                <el-input v-model="ruleFormPrimerReporte.examenParaclinicoMm1" />
              </el-form-item>
            </el-col>
            <el-col :span="8" class="column-custom">
              <!--<el-form-item label="Fecha" prop="fechaExamenMm1">
                <el-input v-model="ruleFormPrimerReporte.fechaExamenMm1" />
              </el-form-item>-->
              <label class="label-field" style="min-width:180px">Fecha</label>
              <el-date-picker v-model="ruleFormPrimerReporte.fechaExamenMm1" type="date" placeholder="Fecha"
                :format="dateFormat" :size="size" />
            </el-col>
            <el-col :span="8">
              <el-form-item label="Resultados: Células/mm3" prop="resultadosExamenMm1">
                <el-input v-model="ruleFormPrimerReporte.resultadosExamenMm1" type="number" step="0.1" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="Examen" prop="examenParaclinicoMm2">
                <el-input v-model="ruleFormPrimerReporte.examenParaclinicoMm2" />
              </el-form-item>
            </el-col>
            <el-col :span="8" class="column-custom">
              <!--<el-form-item label="Fecha" prop="fechaExamenMm2">
                <el-input v-model="ruleFormPrimerReporte.fechaExamenMm2" />
              </el-form-item>-->
              <label class="label-field" style="min-width:180px">Fecha</label>
              <el-date-picker v-model="ruleFormPrimerReporte.fechaExamenMm2" type="date" placeholder="Fecha"
                :format="dateFormat" :size="size" />
            </el-col>
            <el-col :span="8">
              <el-form-item label="Resultados: Células/mm3" prop="resultadosExamenMm2">
                <el-input v-model="ruleFormPrimerReporte.resultadosExamenMm2" type="number" step="0.1" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="Examen" prop="examenParaclinicoMm3">
                <el-input v-model="ruleFormPrimerReporte.examenParaclinicoMm3" />
              </el-form-item>
            </el-col>
            <el-col :span="8" class="column-custom">
              <!--<el-form-item label="Fecha" prop="fechaExamenMm3">
                <el-input v-model="ruleFormPrimerReporte.fechaExamenMm3" />
              </el-form-item>-->
              <label class="label-field" style="min-width:180px">Fecha</label>
              <el-date-picker v-model="ruleFormPrimerReporte.fechaExamenMm3" type="date" placeholder="Fecha"
                :format="dateFormat" :size="size" />
            </el-col>
            <el-col :span="8">
              <el-form-item label="Resultados: Células/mm3" prop="resultadosExamenMm3">
                <el-input v-model="ruleFormPrimerReporte.resultadosExamenMm3" type="number" step="0.1" />
              </el-form-item>
            </el-col>
            <el-divider />
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <h5 class="align-start">MEDICAMENTOS ANTIRRETROVIRALES SUMINISTRADOS EN LA GESTACIÓN ACTUAL</h5>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
              <el-form-item label="Medicamentos antirretrovirales" prop="medicamentoSuministradosGestacionActual"
                class="select-width">
                <el-select v-model="ruleFormPrimerReporte.medicamentoSuministradosGestacionActual"
                  placeholder="Medicamentos antirretrovirales">
                  <el-option label="Lamivudina" value="1" />
                  <el-option label="Abacavir" value="2" />
                  <el-option label="Emtricitabina" value="3" />
                  <el-option label="Tenofovir disoproxil fumarato" value="4" />
                  <el-option label="Efavirez" value="5" />
                  <el-option label="Atazanavir" value="6" />
                  <el-option label="Darunavir" value="7" />
                  <el-option label="Lopinavir" value="8" />
                  <el-option label="Ritonavir" value="9" />
                  <el-option label="Raltegravir" value="10" />
                  <el-option label="Dolutegravir" value="11" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <h5 class="align-start">CONTROL PRENATAL</h5>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
              <label>Recibio Control Prenatal</label><br />
              <el-radio-group v-model="ruleFormPrimerReporte.controlPrenatal">
                <el-radio :label="1">Si</el-radio>
                <el-radio :label="2">No</el-radio>
              </el-radio-group>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
              <h5 class="align-start no-margin text-lg-end">EDAD GESTACIONAL AL PRIMER CONTROL PRENATAL, EN SEMANAS</h5>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
              <el-form-item label="Semanas" prop="semanaGestacional">
                <el-input v-model="ruleFormPrimerReporte.semanaGestacional" type="number" />
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
    <el-tab-pane label="Segundo reporte" name="third" :disabled="disabledThree">

      <el-form :model="ruleFormSegundoReporte" :rules="rulesFormSegundoReporte" ref="thirdForm" label-width="180px"
        class="demo-ruleForm" :size="formSize" status-icon>
        <section style="width: 100%;">
          <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <h5 class="align-start">CARGA VIRAL REALIZADA 2 - 4 SEMANAS ANTES DEL PARTO</h5>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
              <el-form-item label="Carga Viral" prop="cargaViral">
                <el-select v-model="ruleFormSegundoReporte.cargaViral" placeholder="Carga Viral">
                  <el-option label="Si" value="true" />
                  <el-option label="No" value="false" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="column-custom">
              <!--<el-form-item label="Fecha" prop="fecha">
                <el-input v-model="ruleFormSegundoReporte.fecha" />
              </el-form-item>-->
              <label class="label-field" style="min-width:180px">Fecha</label>
              <el-date-picker v-model="ruleFormSegundoReporte.fecha" type="date" placeholder="Fecha" :format="dateFormat"
                :size="size" />
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
              <el-form-item label="Resultados" prop="ResultadosCopiasMl">
                <el-input v-model="ruleFormSegundoReporte.ResultadosCopiasMl" type="number" step="0.1" />
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
    <el-tab-pane label="tercer reporte" name="four" :disabled="disabledFour">

      <el-form :model="ruleFormTercerReporte" :rules="rulesFormTercerReporte" label-width="180px" class="demo-ruleForm"
        :size="formSize" status-icon ref="fourForm">
        <section style="width: 100%;">
          <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <h5 class="align-start">SITUACIÓN DE LA GESTANTE CON EL EMBARAZO ACTUAL</h5>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
              <el-form-item label="Situación gestante" prop="situacionGestante">
                <el-select v-model="ruleFormTercerReporte.situacionGestante" placeholder="Situación gestante">
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
              <label class="label-field" style="min-width:180px">Fecha del parto</label>
              <el-date-picker v-model="ruleFormTercerReporte.fechaDelParto" type="date" placeholder="Fecha del parto"
                :size="size" />
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
              <label>Recibio TAR en interparto </label><br />
              <el-radio-group v-model="ruleFormTercerReporte.tarEnInterparto">
                <el-radio :label="1">Si</el-radio>
                <el-radio :label="0">No</el-radio>
              </el-radio-group>
            </el-col>

            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="mt mb">
              <label>Esquema Arv en interparto</label>
              <el-radio-group v-model="ruleFormTercerReporte.esquemaArvEnInterparto">
                <el-radio :label="1">Simeduvina</el-radio>
                <el-radio :label="2">Nevirapina</el-radio>
              </el-radio-group>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="mt mb">
              <label>Condición del recien nacido</label><br />
              <el-radio-group v-model="ruleFormTercerReporte.condicionRecienNacido">
                <el-radio :label="1">Vivo</el-radio>
                <el-radio :label="2">Mortinato</el-radio>
              </el-radio-group>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="mt mb">
              <label>Numero de productos al nacimiento</label>
              <el-radio-group v-model="ruleFormTercerReporte.numeroDeProductosAlNacimiento">
                <el-radio :label="1">único</el-radio>
                <el-radio :label="2">Multiple</el-radio>
              </el-radio-group>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="mt mb column-custom">
              <!--<el-form-item label="Fecha del parto" prop="edadGestacionalAlNacimientoEnSemana">
                <el-input v-model="ruleFormTercerReporte.edadGestacionalAlNacimientoEnSemana" />
              </el-form-item>-->
              <label class="label-field" style="min-width:180px">Fecha del parto</label>
              <el-date-picker v-model="ruleFormTercerReporte.edadGestacionalAlNacimientoEnSemana" type="date"
                placeholder="Fecha del parto" :format="dateFormat" :size="size" />
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="mt mb">
              <el-form-item label="Peso" prop="pesoEnGramos">
                <el-input v-model="ruleFormTercerReporte.pesoEnGramos" type="number" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="mt mb">
              <label>Sexo</label><br />
              <el-radio-group v-model="ruleFormTercerReporte.sexo">
                <el-radio :label="1">Hombre</el-radio>
                <el-radio :label="2">Mujer</el-radio>
                <el-radio :label="3">Intersexual</el-radio>
              </el-radio-group>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="mt mb">
              <label>Tipo de parto</label><br />
              <el-radio-group v-model="ruleFormTercerReporte.tipoParto">
                <el-radio :label="1">Cesarea</el-radio>
                <el-radio :label="2">Vaginal</el-radio>
              </el-radio-group>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="mt mb">
              <label>Supreción de la lactancia</label><br />
              <el-radio-group v-model="ruleFormTercerReporte.suprecionDeLactancia">
                <el-radio :label="1">Si</el-radio>
                <el-radio :label="0">No</el-radio>
              </el-radio-group>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="mt mb">
              <label>Medicamentos suministrados</label>
              <el-radio-group v-model="ruleFormTercerReporte.medicamentoSuministrado">
                <el-radio :label="1" @click="isVisible = false">Cabergolina</el-radio>
                <el-radio :label="2" @click="isVisible = true">Otro</el-radio>
              </el-radio-group>
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

    <el-tab-pane label="Cuarto reporte" name="five" :disabled="disabledFive">

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
    <el-tab-pane label="Quinto reporte" name="six" :disabled="disabledSix">
      <el-form :model="ruleFormquintoReporte" :rules="rulesFormQuintoReporte" label-width="180px" class="demo-ruleForm"
        :size="formSize" status-icon ref="sixForm">
        <section style="width: 100%;">
          <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <h5 class="align-start">PARACLINICOS REALIZADOS A LA GESTANTE EN EL EMBARAZO ACTUAL</h5>
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
    <el-tab-pane label="Seguimiento" name="seven" :disabled="disabledSeven">
      <el-form :model="ruleFormSeguimiento" :rules="rulesFormSeguimiento" label-width="180px" class="demo-ruleForm"
        :size="formSize" status-icon ref="sevenForm">
        <section style="width: 100%;">
          <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <h5 class="align-start">REPORTE DE DATOS DEL SEGUIMIENTO AL BINOMIO MADRE/HIJO. IPS DE ATENCIÓN EN VIH</h5>
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
import { ElMessageBox } from 'element-plus'
import type { TabsPaneContext, ElForm } from 'element-plus'
import type { CheckboxValueType } from 'element-plus'
import { RuleFormDatosGestante, RuleFormPrimerReporte, RuleFormSegundoReporte, RuleFormTercerReporte, RuleFormCuartoReporte, RuleFormquintoReporte, RuleFormSeguimiento } from '@/interfaces/modeloVih'

type FormInstance = InstanceType<typeof ElForm>

@Options({
  components: {
    HelloWorld,
  },
})

export default class VihView extends Vue {

  activeName = 'first'
  disabledTwo = true
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

  positionVihForm = "right"
  labelPositionVihForm = ref<FormProps['labelPosition']>('right')

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

  ruleFormPrimerReporte = reactive<RuleFormPrimerReporte>({
    momentoDiagnostico: [],
    pruebaConfVih: [],
    fechaProbableParto: new Date(),
    resultados: 0,
    examenParaclinicoMl1: '',
    fechaExamenMl1: new Date(),
    resultadosExamenMl1: 0,
    examenParaclinicoMl2: '',
    fechaExamenMl2: new Date(),
    resultadosExamenMl2: 0,
    examenParaclinicoMl3: '',
    fechaExamenMl3: new Date(),
    resultadosExamenMl3: 0,
    examenParaclinicoMl4: '',
    fechaExamenMl4: new Date(),
    resultadosExamenMl4: 0,
    examenParaclinicoMl5: '',
    fechaExamenMl5: new Date(),
    resultadosExamenMl5: 0,
    examenParaclinicoMm1: '',
    fechaExamenMm1: new Date(),
    resultadosExamenMm1: 0,
    examenParaclinicoMm2: '',
    fechaExamenMm2: new Date(),
    resultadosExamenMm2: 0,
    examenParaclinicoMm3: '',
    fechaExamenMm3: new Date(),
    resultadosExamenMm3: 0,
    medicamentoSuministradosGestacionActual: [],
    controlPrenatal: false,
    semanaGestacional: 0,
  })

  ruleFormSegundoReporte = reactive<RuleFormSegundoReporte>({
    cargaViral: false,
    fecha: new Date(),
    ResultadosCopiasMl: 0
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
    pruebaConfVih: [
      {
        required: true,
        message: 'Por favor seleccione la prueba de confirmación VIH',
        trigger: 'change',
      },
    ],
    fechaProbableParto: [
      { required: true, message: 'Por favor ingrese la fecha probable de parto', trigger: 'blur' }
    ],
    resultados: [
      { required: true, message: 'Por favor ingrese el resultado', trigger: 'blur' }
    ],
    examenParaclinicoMl1: [
      { required: true, message: 'Por favor ingrese el examen aplicado', trigger: 'blur' }
    ],
    fechaExamenMl1: [
      { required: true, message: 'Por favor ingrese la fecha del examen', trigger: 'blur' }
    ],
    resultadosExamenMl1: [
      { required: true, message: 'Por favor ingrese los resultados del examen', trigger: 'blur' }
    ],
    examenParaclinicoMl2: [
      { required: true, message: 'Por favor ingrese el examen aplicado', trigger: 'blur' }
    ],
    fechaExamenMl2: [
      { required: true, message: 'Por favor ingrese la fecha del examen', trigger: 'blur' }
    ],
    resultadosExamenMl2: [
      { required: true, message: 'Por favor ingrese los resultados del examen', trigger: 'blur' }
    ],
    examenParaclinicoMl3: [
      { required: true, message: 'Por favor ingrese el examen aplicado', trigger: 'blur' }
    ],
    fechaExamenMl3: [
      { required: true, message: 'Por favor ingrese la fecha del examen', trigger: 'blur' }
    ],
    resultadosExamenMl3: [
      { required: true, message: 'Por favor ingrese los resultados del examen', trigger: 'blur' }
    ],
    examenParaclinicoMl4: [
      { required: true, message: 'Por favor ingrese el examen aplicado', trigger: 'blur' }
    ],
    fechaExamenMl4: [
      { required: true, message: 'Por favor ingrese la fecha del examen', trigger: 'blur' }
    ],
    resultadosExamenMl4: [
      { required: true, message: 'Por favor ingrese los resultados del examen', trigger: 'blur' }
    ],
    examenParaclinicoMl5: [
      { required: true, message: 'Por favor ingrese el examen aplicado', trigger: 'blur' }
    ],
    fechaExamenMl5: [
      { required: true, message: 'Por favor ingrese la fecha del examen', trigger: 'blur' }
    ],
    resultadosExamenMl5: [
      { required: true, message: 'Por favor ingrese los resultados del examen', trigger: 'blur' }
    ],
    examenParaclinicoMm1: [
      { required: true, message: 'Por favor ingrese el examen aplicado', trigger: 'blur' }
    ],
    fechaExamenMm1: [
      { required: true, message: 'Por favor ingrese la fecha del examen', trigger: 'blur' }
    ],
    resultadosExamenMm1: [
      { required: true, message: 'Por favor ingrese los resultados del examen', trigger: 'blur' }
    ],
    examenParaclinicoMm2: [
      { required: true, message: 'Por favor ingrese el examen aplicado', trigger: 'blur' }
    ],
    fechaExamenMm2: [
      { required: true, message: 'Por favor ingrese la fecha del examen', trigger: 'blur' }
    ],
    resultadosExamenMm2: [
      { required: true, message: 'Por favor ingrese los resultados del examen', trigger: 'blur' }
    ],
    examenParaclinicoMm3: [
      { required: true, message: 'Por favor ingrese el examen aplicado', trigger: 'blur' }
    ],
    fechaExamenMm3: [
      { required: true, message: 'Por favor ingrese la fecha del examen', trigger: 'blur' }
    ],
    resultadosExamenMm3: [
      { required: true, message: 'Por favor ingrese los resultados del examen', trigger: 'blur' }
    ],
    medicamentoSuministradosGestacionActual: [
      {
        required: true,
        message: 'Por favor seleccione los medicamentos sumnistrados',
        trigger: 'change',
      },
    ],
    controlPrenatal: [
      { required: true, message: 'Por favor marque si o no', trigger: 'blur' }
    ],
    semanaGestacional: [
      { required: true, message: 'Por favor indique la semana gestacional', trigger: 'blur' }
    ]
  })

  rulesFormSegundoReporte = reactive<FormRules<RuleFormSegundoReporte>>({
    cargaViral: [
      {
        required: true,
        message: 'Por favor seleccione si tiene carga viral',
        trigger: 'change',
      },
    ],
    fecha: [
      {
        required: true,
        message: 'Por favor seleccione una fecha',
        trigger: 'blur',
      },
    ],
    ResultadosCopiasMl: [
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
          this.changeTab(tab)
        } else {
          console.log('valor a guardar', this.ruleFormDatosGestante)
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

  options = Array.from({ length: 10000 }).map((_, idx) => ({
    value: `${idx + 1}`,
    label: `${idx + 1}`,
  }))

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
</style>