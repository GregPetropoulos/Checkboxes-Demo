import { Fragment, useState } from 'react';

const App = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Fragment>
      <h1>Checkbox Journey</h1>
      <div className='container'></div>
    </Fragment>
  );
};

export default App;
