import FilterForm from '../components/FilterForm';
import FilterInterface from '../interfaces/filterInterface';


const VotoPreferentePage = () => {
  const handleFormSubmit = (values: FilterInterface) => {
    console.log('Form submitted with values:', values);
    // Aquí puedes hacer lo que necesites con los valores del formulario.
  };

  return (
    <div>
      <h1>Formik Basic Tutorial</h1>
      <FilterForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default VotoPreferentePage;
