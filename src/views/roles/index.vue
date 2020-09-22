<template>
  <CContainer class="c-app flex-column" :fluid="true" role="status">
    <CCard>
        <CCardHeader>
            <CRow>
                <CCol sm="9">
                    <h4>Ro'llar ro'yxati</h4>
                </CCol>
                <CCol sm="3">
                    <router-link :to="{ name: 'RoleCreate' }">
                        <CButton color="primary float-right">
                            <CIcon name="cil-user-plus" /> Add
                        </CButton>
                    </router-link>
                </CCol>
            </CRow>
        </CCardHeader>
      <CCardBody>
        <CDataTable
          :items="items"
          :fields="fields"
          :column-filter="false"
          :table-filter="false"
          :items-per-page-select="false"
          :items-per-page="15"
          hover
          :sorter="false"
          pagination
        >
          <template #show_details="{item}"> 
            <td class="py-2">
              <CButton
                color="primary"
                variant="outline"
                square
                size="sm"
                @click="updateRole(item.id)"
              >
                Tahrirlash
              </CButton>
            </td>
          </template>   
        </CDataTable>
      </CCardBody>
    </CCard>
  </CContainer>
</template>

<script>
import { roles as roleData } from "@/data/";

export default {
    name: "RoleIndex",
    data() {
        return {
        items: [],
        fields: roleData.fields,
        details: [],
        collapseDuration: 0
        };
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        fetchData(){
            this.$api("roles").then(res => {
                this.items = res.data.result.data.roles;
            });
        },
        updateRole(id) {
            this.$router.push({ name: "RoleEdit", params: { id } });
        }
    }
};
</script>
