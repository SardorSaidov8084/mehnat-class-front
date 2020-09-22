<template>
  <CContainer class="c-app flex-column" :fluid="true">
    <router-link :to="{ name: 'RoleIndex' }" class="mb-3">
      <CIcon name="cilArrowLeft" /> Ro'llar ro'yhatiga qaytish
    </router-link>
    <CCard class="w-100 ">
        <CCardHeader>
            <CRow>
                <CCol sm="9">
                    <h4>Yangi rol yaratish</h4>
                </CCol>
                <CCol sm="3">
                    <CButton color="primary float-right" @click="saveRole">
                        <CIcon name="cil-user-plus" /> Saqlash
                    </CButton>
                </CCol>
            </CRow>
        </CCardHeader>
      <CCardBody class="justify-content-center">
        <FormRole :form="form" />
      </CCardBody>
    </CCard>
  </CContainer>
</template>
<script>
import FormRole from "./form";
export default {
    name: "RoleCreate",
    components: {
        FormRole
    },
    data() {
        return {
        form: {
            id: null,
            name: "",
            slug: "",
        }
        };
    },
    mounted() {
    },
    methods: {
        saveRole() {
            this.form['permissions'] = [];
            this.$api.post(`roles`, { ...this.form }).then(res => {
                this.form = res.data.result.data.role;
                this.$router.push({ name: "RoleIndex" });
            });
        }
    }
};
</script>
