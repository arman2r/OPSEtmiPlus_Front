<template>
    <el-row :gutter="10" style="width: 100%;">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-row justify="space-between">
                <div>
                    <h4>Reportes Vih</h4>
                </div>
                <!--<div class="center-v">
                    <router-link to="/vih">
                        <el-button size="small" style="margin-right:5px">Registrar
                            reportes</el-button>
                    </router-link>
                </div>-->
            </el-row>

        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column label="id" prop="Id" />
                <el-table-column label="identificación" prop="Identificación" />
                <el-table-column label="nombre" prop="Nombre" />
                <!--<el-table-column label="Fecha posible parto" prop="fechaPosibleParto" />-->
                <el-table-column prop="regimen" label="Régimen"></el-table-column>
                <el-table-column prop="eapb" label="EAPB"></el-table-column>
                <el-table-column prop="telefono" label="Teléfono"></el-table-column>
                <el-table-column align="right">
                    <template #header>
                        <el-input v-model="search" size="small" placeholder="Type to search" />
                    </template>
                    <template #default="scope">
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
                            style="margin-right:5px">Edit</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-col>
    </el-row>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { computed, reactive, ref } from 'vue';
import { IGestante } from '@/api/ETMIPLUS_API';

export default class VihListView extends Vue {
    tableData: IGestante[] = []

    search = ''
    filterTableData = computed(() =>
        this.tableData.filter(
            (data) =>
                !this.search ||
                data.nombresApellidos?.toLowerCase().includes(this.search.toLowerCase())
        )
    )

    handleEdit = async (index: number, row: IGestante) => {
        console.log('editar', index, row.idGestante);
    }
}
</script>