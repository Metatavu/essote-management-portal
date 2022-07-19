import { Slider, Box, TextField, Input } from "@mui/material";
import { styled } from "@mui/material/styles";

/**
 * Styled html field component
 */
export const HtmlFieldWrapper = styled(Box, {
  label: "html-field-wrapper"
})(() => ({
  flex: 1,
  width: "100%",
  height: "auto"
}));

/**
 * Styled slider field component
 */
export const SliderFieldWrapper = styled(Slider, {
  label: "slider-field-wrapper"
})(() => ({
  width: "100%",
  height: "0.25em",
  color: "#4FA3DF"
}));

/**
 * Styled submit field component
 */
export const SubmitFieldWrapper = styled(TextField, {
  label: "submit-field-wrapper"
})(() => ({
  borderRadius: "0.3rem",
  border: 0
}));

/**
 * Styled select field component
 */
export const SelectFieldWrapper = styled(Box, {
  label: "select-field-wrapper"
})(() => ({
  width: "100%",
  backgroundColor: "#fff",
  borderRadius: "1em"
}));

/**
 * Styled radio field component
 */
export const RadioFieldWrapper = styled(Box, {
  label: "radio-field-wrapper"
})(() => ({
  width: "100%"
}));

/*
 * Styled url field component
 */
export const UrlFieldWrapper = styled(Input, {
  label: "url-field-wrapper"
})(() => ({
  flex: 1,
  width: "80%",
  height: "auto",
  backgroundColor: "#fff"
}));

/**
 * Styled text field component
 */
export const TextFieldWrapper = styled(Input, {
  label: "text-field-wrapper"
})(() => ({
  flex: 1,
  width: "100%",
  fontSize: "1em",
  border: "1px solid rgba(0, 0, 0, .5)",
  borderRadius: "0.5rem",
  backgroundColor: "#fff"
}));

/**
 * Styled number field component
 */
export const NumberFieldWrapper = styled(TextField, {
  label: "number-field-wrapper"
})(() => ({
  width: "100%",
  fontSize: "1em",
  border: "1px solid rgba(0, 0, 0, .5)",
  borderRadius: "0.5rem",
  backgroundColor: "#fff"
}));

/**
 * Styled checklist field component
 */
export const ChecklistFieldWrapper = styled(Box, {
  label: "checklistFieldWrapper-field-wrapper"
})(() => ({
  flex: 1,
  width: "100%"
}));