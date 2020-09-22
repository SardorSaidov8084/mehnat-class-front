<template>
  <CContainer class="c-app flex-column" :fluid="true">
    <router-link :to="{ name: 'RoleIndex' }" class="mb-3">
      <CIcon name="cilArrowLeft" /> Foydalanuvchilar ro'yhatiga qaytish
    </router-link>
    <CCard class="w-100">
       <CCardHeader>
            <CRow>
                <CCol sm="9">
                    <h4>Ro'lni tahrirlash</h4>
                </CCol>
                <CCol sm="3">
                    <CButton color="primary float-right" @click="updateRole">
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
    name: "RoleUpdate",
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
        this.fetchLoad();
    },
    methods: {
        fetchLoad(){
            let id = this.$route.params.id;
            this.$api(`roles/${id}`).then(res  => {
                this.form = res.data.result.data.role;
            });
        },
        updateRole() {
            this.form['permissions'] = [];
            this.$api.put(`roles/${this.form.id}`, { ...this.form }).then(res => {
                this.form = res.data.result.data.role;
                this.$router.push({ name: "RoleIndex" });
            });
        }
    }
};
</script>
