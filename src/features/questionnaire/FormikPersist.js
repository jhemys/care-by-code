import React, { PureComponent } from 'react'
import { FormikConsumer } from 'formik'

class FormikPersistor extends PureComponent {
  // componentWillMount() {
  //   window.addEventListener('beforeunload', this.clear)
  // }

  componentDidMount() {
    const { setValues, setErrors } = this.props
    const data = window.localStorage.getItem(this.storageKey)
    if (data) {
      const { values, errors } = JSON.parse(data)
      setValues(values)
      setErrors(errors)
    }
  }

  componentDidUpdate() {
    console.log(window.localStorage);
    const { values, errors, isSubmitting } = this.props
    console.log(isSubmitting);

    window.localStorage.setItem(this.storageKey, JSON.stringify({ values, errors }))
    if (isSubmitting)
      this.clear();

    console.log(window.localStorage);
  }

  // componentWillUnmount() {
  //   window.removeEventListener('beforeunload', this.clear)
  // }

  get storageKey() {
    return `formik.form.${this.props.name}`
  }

  clear = () => {
    window.localStorage.removeItem(this.storageKey);
    console.log('FOI');
  }

  render() {
    return null
  }
}

const FormikPersist = ({ name }) => (
  <FormikConsumer>
    {({ values, errors, setValues, setErrors, isSubmitting }) => (
      <FormikPersistor
        name={name}
        setValues={setValues}
        setErrors={setErrors}
        values={values}
        errors={errors}
        isSubmitting={isSubmitting}
      />
    )}
  </FormikConsumer>
)

export default FormikPersist