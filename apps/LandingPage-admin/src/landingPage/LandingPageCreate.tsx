import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const LandingPageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Content" multiline source="content" />
        <div />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
