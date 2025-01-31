import * as React from "react";
import { useTranslation } from "react-i18next";
import { $Diff } from "utility-types";
import { CollectionPermission } from "@shared/types";
import { EmptySelectValue } from "~/types";
import InputSelect, { Props, Option } from "./InputSelect";

export default function InputSelectPermission(
  props: $Diff<
    Props,
    {
      options: Array<Option>;
      ariaLabel: string;
    }
  >
) {
  const { value, onChange, ...rest } = props;
  const { t } = useTranslation();
  const handleChange = React.useCallback(
    (value) => {
      if (value === EmptySelectValue) {
        value = null;
      }

      onChange?.(value);
    },
    [onChange]
  );

  return (
    <InputSelect
      label={t("Default access")}
      options={[
        {
          label: t("Can edit"),
          value: CollectionPermission.ReadWrite,
        },
        {
          label: t("View only"),
          value: CollectionPermission.Read,
        },
        {
          label: t("No access"),
          value: EmptySelectValue,
        },
      ]}
      ariaLabel={t("Default access")}
      value={value || EmptySelectValue}
      onChange={handleChange}
      {...rest}
    />
  );
}
