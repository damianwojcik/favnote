import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';

const DetailsTemplate = ({ pageType }) => (
  <UserPageTemplate pageType={pageType}>
    <Link to="/">Go back</Link>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  pageType: PropTypes.string.isRequired,
};

export default DetailsTemplate;
