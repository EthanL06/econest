import React, { useEffect, useRef, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Input } from "../ui/input";
import { Home, MapPin } from "lucide-react";
import usePlacesAutocomplete from "use-places-autocomplete";

type Props = {};

const AddressInput = (props: Props) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({ debounce: 500 });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(data);
    setValue(e.target.value);
  };

  const handleSelect = (suggestion: {
    description: string;
    matched_substrings: {
      length: number;
      offset: number;
    }[];
    structured_formatting: {
      main_text: string;
      secondary_text: string;
    };
  }) => {
    setValue(suggestion.description, false);
    clearSuggestions();
  };

  return (
    <>
      <Input
        onChange={handleInput}
        value={value}
        disabled={!ready}
        name="address"
        placeholder="Enter home address"
        type="text"
        autoComplete="off"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
          <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
        </svg>
      </Input>
      {status === "OK" && (
        <Popover open={true}>
          <PopoverTrigger asChild>
            <div className="invisible"></div>
          </PopoverTrigger>
          <PopoverContent className="flex w-[19rem] flex-col p-0">
            {data.slice(0, 3).map(
              (
                suggestion: {
                  description: string;
                  matched_substrings: {
                    length: number;
                    offset: number;
                  }[];
                  structured_formatting: {
                    main_text: string;
                    secondary_text: string;
                  };
                },
                index,
              ) => (
                <Suggestion
                  onSuggestionClick={handleSelect}
                  suggestion={suggestion}
                  key={index}
                />
              ),
            )}
          </PopoverContent>
        </Popover>
      )}
    </>
  );
};

const Suggestion = ({
  suggestion,
  key,
  onSuggestionClick,
}: {
  suggestion: {
    description: string;
    matched_substrings: {
      length: number;
      offset: number;
    }[];
    structured_formatting: {
      main_text: string;
      secondary_text: string;
    };
  };
  key: number;
  onSuggestionClick: (suggestion: any) => void;
}) => {
  const highlightMatchedText = (text: string) => {
    const matchedText = suggestion.matched_substrings[0];
    const start = matchedText.offset;
    const end = matchedText.offset + matchedText.length;
    return (
      <div className="font-sans">
        {text.slice(0, start)}
        <span className="font-bold">{text.slice(start, end)}</span>
        {text.slice(end)}
      </div>
    );
  };
  return (
    <button
      key={key}
      className="flex flex-col border-b p-4 transition-colors  hover:bg-gray-100"
      onClick={() => onSuggestionClick(suggestion)}
    >
      <div className="flex items-center">
        <MapPin className="h-5 w-5 text-primary" />
        <div className="ml-2 w-[26ch] overflow-hidden overflow-ellipsis whitespace-nowrap text-left font-medium">
          {highlightMatchedText(suggestion.structured_formatting.main_text)}
        </div>
      </div>
      <div className="ml-7 w-[35ch] overflow-hidden overflow-ellipsis whitespace-nowrap text-left text-xs text-muted-foreground">
        {suggestion.structured_formatting.secondary_text}
      </div>
    </button>
  );
};

export default AddressInput;
