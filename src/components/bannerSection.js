// import React from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
import Panel from './panel'
// export default function SimpleContainer() {
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <Container maxWidth="sm">
//         <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
//         <Panel/>
//       </Container>
//     </React.Fragment>
//   );
// }
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import banner from '../img/banner.png'

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <img component="div" style={{ height: '50vh',marginTop:'25px',backgroundSize:'cover' }} src={banner} />
        <Panel/>
      </Container>
    </React.Fragment>
  );
}
