"use client";
import React from "react";
import useSWR from "swr";
import Select from "react-select";

const fetchModels = async () =>
  await fetch("/api/getEngines").then((res) => res.json());

const ModelSelection = () => {
  const { data: models, isLoading } = useSWR("models", fetchModels);
  const { data: model, mutate: setModel } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });

  return (
    <div className="mt-2">
      <Select
        className="mt-2"
        options={models?.modelOptions}
        defaultValue={model}
        placeholder={model}
        isSearchable
        isLoading={isLoading}
        menuPosition="fixed"
        classNames={{
          control: () => "bg-[#434654] border-[#434654]",
        }}
        onChange={(e: any) => setModel(e.value)}
      />
    </div>
  );
};

export default ModelSelection;
