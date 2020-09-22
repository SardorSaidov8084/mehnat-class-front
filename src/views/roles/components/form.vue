<template>
  <div>
    <CForm>
      <CRow>
        <CCol sm="8">
          <CRow>
            <CCol sm="12">
              <CInput
                label="Rol nomi"
                placeholder="Rol nomi"
                :horizontal="{ label: 'col-sm-4', input: 'col-sm-8' }"
                v-model="form.name"
              />
            </CCol>
            <CCol sm="12">
              <CInput
                label="Slug"
                placeholder=""
                :horizontal="{ label: 'col-sm-4', input: 'col-sm-8' }"
                v-model="form.slug"
              />
            </CCol>
          </CRow>
        </CCol>
      </CRow>
    </CForm>
  </div>
</template>
<script>
export default {
  name: "FormRole",
  props: {
    form: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
    };
  }
};
</script>
