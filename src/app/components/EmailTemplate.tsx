import * as React from 'react';

interface EmailTemplateProps {}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({}) => (
  <div>
    <h1>I got your Message</h1>
    <p>Thank you for contacting me! I will response you soon.</p>
  </div>
);
