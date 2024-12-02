import PropTypes from 'prop-types';
import React from 'react';
import { Field } from '@components/common/form/Field';
import { Form } from '@components/common/form/Form';
import './LoginForm.scss';
import Area from '@components/common/Area';

export default function LoginForm({ authUrl, dashboardUrl }) {
  const [error, setError] = React.useState(null);

  const onSuccess = (response) => {
    if (!response.error) {
      window.location.href = dashboardUrl;
    } else {
      setError(response.error.message);
    }
  };

  return (
    <div className="admin-login-form">
      <div className="flex items-center justify-center mb-12">
      <div className="logo">
      <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 278.36 275.74"
            width="200"
            height="200"
          >
            <defs>
              <style>{`.cls-1{fill:#ea5152;}.cls-1,.cls-2,.cls-3,.cls-4{stroke-width:0px;}.cls-2,.cls-5{fill:none;}.cls-6{clip-path:url(#clippath);}.cls-3{fill:#ea4f51;}.cls-4{fill:#ef7e7f;}.cls-5{stroke:#f0f1f0;stroke-miterlimit:10;stroke-width:1.89px;}`}</style>
              <clipPath id="clippath">
                <rect className="cls-2" x="-438.31" y="-246.79" width="390.62" height="168.6" transform="translate(-486 -324.98) rotate(-180)" />
              </clipPath>
            </defs>
            <g>
              <g>
                <path className="cls-4" d="M201.41,136.92l-22.67,23.14-2.11,2.16v-43.46l-12.17,12.18-.48,44.29-17.37,17.27-1.97,1.96-19.34-19.7v-43.57l-10.32-10.12-2.1-2.06-.11,39.19v3.91s-26.75-26.62-26.75-26.62l.39-.21c1.34,1.79,3.47,2.95,5.88,2.95.14,0,.27,0,.41,0,2.17-.12,4.1-1.19,5.37-2.79.98-1.25,1.57-2.83,1.57-4.54l.02-2.52.1-.05v-41.43l2.1,2.12,36.46,36.81v40.6l6.68,6.45,1.94-1.97,4.27-4.36v-40.72l38.57-38.92v40.95l.1.04.02,3.01c0,4.05,3.29,7.34,7.34,7.34,1.55,0,2.99-.49,4.18-1.31Z"/>
                <polygon className="cls-4" points="135.57 136.52 158.62 136.52 158.62 146.76 135.57 147.21 135.57 136.52"/>
                <polygon className="cls-4" points="168.35 101.53 146.62 91.79 142.71 81.28 144.93 82.28 163.91 90.78 168.12 100.96 168.35 101.53"/>
                <polygon className="cls-4" points="167.16 103.03 156.89 106.77 156.22 107.02 134.9 97.83 145.29 93.61 147.72 94.65 167.16 103.03"/>
              </g>
              <g>
                <polygon className="cls-1" points="159.05 134.58 159.05 144.82 158.62 144.83 153.32 144.93 151.21 144.97 140.42 145.19 138.32 145.23 136.01 145.28 136.01 134.58 159.05 134.58"/>
                <path className="cls-1" d="M178.75,116.95l-2.11,2.11-10.07,10.06-.48,44.3-19.34,19.22-.14-.14-19.21-19.56v-43.58l-12.41-12.18v3.89s-.12,39.22-.12,39.22l-2.1-2.09-20.07-19.98-4.58-4.56.39-.21c1.34,1.8,3.47,2.95,5.88,2.95,1.34,0,2.59-.36,3.67-.98,2.2-1.27,3.67-3.65,3.67-6.36,0-.81.25-1.19.02-1.93l.1-.64v-41.42l38.57,38.92v40.6l6.52,6.3.16.15,6.22-6.33v-40.72l36.46-36.8,2.1-2.12v40.95l.1.03.02,3.01c0,4.05,3.29,7.34,7.34,7.34,1.56,0,2.99-.48,4.19-1.31l-24.78,25.3v-43.45Z"/>
                <polygon className="cls-1" points="170.36 101.97 168.12 100.96 148.63 92.23 144.93 82.28 144.73 81.72 165.91 91.22 170.36 101.97"/>
                <polygon className="cls-1" points="170.22 103.82 159.29 107.81 156.89 106.77 137.97 98.61 147.72 94.65 148.36 94.39 170.22 103.82"/>
              </g>
            </g>
          </svg>
</div>

      </div>
      {error && <div className="text-critical py-4">{error}</div>}
      <Form
        action={authUrl}
        method="POST"
        id="adminLoginForm"
        isJSON
        onSuccess={onSuccess}
        btnText="SIGN IN"
      >
        <Area
          id="adminLoginForm"
          coreComponents={[
            {
              component: {
                default: Field
              },
              props: {
                name: 'email',
                type: 'email',
                label: 'Email',
                placeholder: 'Email',
                validationRules: ['notEmpty', 'email']
              },
              sortOrder: 10
            },
            {
              component: {
                default: Field
              },
              props: {
                name: 'password',
                type: 'password',
                label: 'Password',
                placeholder: 'Password',
                validationRules: ['notEmpty']
              },
              sortOrder: 20
            }
          ]}
          noOuter
        />
      </Form>
    </div>
  );
}

LoginForm.propTypes = {
  authUrl: PropTypes.string.isRequired,
  dashboardUrl: PropTypes.string.isRequired
};

export const layout = {
  areaId: 'content',
  sortOrder: 10
};

export const query = `
  query Query {
    authUrl: url(routeId: "adminLoginJson")
    dashboardUrl: url(routeId: "dashboard")
  }
`;
