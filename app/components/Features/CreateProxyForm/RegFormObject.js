import React from 'react';
import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';

const FormData = [
  {
    id: 'proxy',
    label: 'Proxy Account',
    placeholder: 'Account that is the proxy',
  },
  {
    id: 'name',
    label: 'Proxy Name (64 char allowed)',
    placeholder: 'Full name of the proxy',
  },
  {
    id: 'slogan',
    label: 'Slogan (64 char allowed)',
    placeholder: 'A short description of your proxy',
    md: 12,
  },
  {
    id: 'philosophy',
    label: 'Philosophy (1024 char allowed)',
    placeholder: "Description of proxy's voting philosophy",
    md: 12,
  },
  {
    id: 'background',
    label: 'Background (1024 char allowed)',
    placeholder: 'Background information / who is the proxy?',
    md: 12,
  },
  {
    id: 'website',
    label: 'Background (1024 char allowed)',
    placeholder: 'Background information / who is the proxy?',
  },
  {
    id: 'logo_256',
    label: 'Logo URL (256px x 256px)',
    placeholder: 'Url to an image for your proxy',
  },
  {
    id: 'telegram',
    label: 'Telegram',
    placeholder: 'Telegram account name',
  },
  {
    id: 'steemit',
    label: 'Steemit',
    placeholder: 'Steemit account name',
  },
  {
    id: 'twitter',
    label: 'Twitter',
    placeholder: 'Twitter account name',
  },
  {
    id: 'wechat',
    label: 'WeChat',
    placeholder: 'WeChat account name',
  },
];

const FormObject = props => {
  const { handleSubmit } = props;
  const formProps = {
    handleSubmit,
    submitColor: 'rose',
    submitText: 'Register',
  };
  return (
    <ToolForm {...formProps}>
      {FormData.map(form => {
        return <ToolInput key={form.id} {...form} {...props} />;
      })}
    </ToolForm>
  );
};

export default FormObject;
