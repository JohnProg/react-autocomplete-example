import React from "react";
import Autosuggest from "react-autosuggest";

import "./styles.css";

type Props = {
  data: any[];
  placeholder?: string;
  renderItem: any;
  searchValue: (title?: string) => {};
};

const Autocomplete: React.FC<Props> = ({
  data,
  renderItem,
  searchValue,
  placeholder
}: Props) => {
  const [value, setValue] = React.useState("");
  const getSuggestionValue = (suggestion: any) => suggestion.title;
  const renderSuggestion = (suggestion: any) => {
    return renderItem(suggestion);
  };
  const onChange = (event: any, { newValue }: { newValue: string }) => {
    setValue(newValue);
  };
  const onSuggestionsFetchRequested = ({ value }: { value: string }) => {
    searchValue(value);
  };
  const onSuggestionsClearRequested = () => {
    // searchValue("");
  };
  const inputProps = {
    placeholder,
    value,
    onChange
  };
  return (
    <Autosuggest
      suggestions={data || []}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
};

export default Autocomplete;
