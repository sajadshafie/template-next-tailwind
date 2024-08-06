"use client";
import { useForm } from "react-hook-form";
import {
  FormProvider,
  SwitchLabel,
  TextField,
  Typography,
} from "@/components/core";
import {
  Stack,
  Button,
  SelectChangeEvent,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { default as MuiSelect } from "@mui/material/Select";
import Select from "@/components/core/Select";
import React, { useEffect, useState } from "react";
import RadioGroupLabel from "@/components/core/RadioGroupLabel";
import Slider from "@/components/core/Slider";
import ToolTip from "@/components/core/Tooltip";
import Popover from "@/components/core/Popover";
import BreadCrumps from "@/components/core/BreadCrump";
import Link from "@/components/core/Link";
import Dialog from "@/components/core/Dialog";
import { useBoolean } from "usehooks-ts";
import CheckboxLabel from "@/components/core/CheckboxLabel";
import { useTranslations } from "@/hooks";
import Skeleton from "@/components/core/Skeleton";
import ProcessLoading from "@/components/core/ProcessLoading";

interface FormValues {
  isAdmin: boolean;
  username: string;
  select: number[];
  radio: null | number;
  slider: number;
}

export default function Home() {
  const formMethods = useForm<FormValues>({
    defaultValues: {
      username: "",
      isAdmin: false,
      select: [],
      radio: null,
      slider: 0,
    },
  });

  const t = useTranslations();

  const { value: isOpen, setFalse: close, toggle } = useBoolean();

  const names = [
    {
      label: "Oliver Hansen",
      value: 1,
    },
    { label: "Van Henry", value: 2 },
    {
      label: "April Tucker",
      value: 3,
    },
    {
      label: "Ralph Hubbard",
      value: 4,
    },
    { label: "Omar Alexander", value: 5 },
    {
      label: "Carlos Abbott",
      value: 6,
    },
  ];

  const radioList = [
    { label: "Van Henry", value: 2 },
    {
      label: "April Tucker",
      value: 3,
    },
    {
      label: "Ralph Hubbard",
      value: 4,
    },
    { label: "Omar Alexander", value: 5 },
    {
      label: "Carlos Abbott",
      value: 6,
    },
  ];
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  const [process, setProcess] = useState<ProcessLoadingType>("loading");
  useEffect(() => {
    setTimeout(() => {
      setProcess("data");
    }, 2000);
  }, [process]);

  const ss = document.getElementById("typo")?.childNodes;

  return (
    <ProcessLoading onClickError={() => setProcess("loading")} state={process}>
      <FormProvider
        {...formMethods}
        onSubmit={(data) => {
          console.log("data:", data);
        }}
      >
        <CheckboxLabel label="test checkbox" name="checkbox" />
        <Popover label="Click me">sfsdfsdfsdf</Popover>
        <BreadCrumps />
        <Stack gap={2} margin={4}>
          <Slider
            min={0}
            max={100}
            defaultValue={30}
            name="slider"
            valueLabelDisplay="on"
          />
          <RadioGroupLabel
            label="radio-list"
            name="radio"
            list={radioList}
            listLabelKey="label"
            listValueKey="value"
          />
          <TextField multiline name="username" label="test" rows={5} />

          <SwitchLabel size="small" name="isAdmin" label="isAdmin" />
          <Button
            type="submit"
            variant="contained"
            sx={{
              maxWidth: 250,
            }}
          >
            submit
          </Button>
        </Stack>
        <Link href="/fa/testPage" label="isAdmin" />
        <Button
          type="submit"
          variant="contained"
          sx={{
            maxWidth: 250,
          }}
        >
          submit
        </Button>
        <Dialog title="test" handleClose={close} open={isOpen}></Dialog>
        <Select
          formControlProps={{
            variant: "filled",
          }}
          name="select"
          label="test2"
          list={names}
          multiple
        />
        <Skeleton variant="text" sx={{ fontSize: "20px" }} />
        <Typography message="sfdsdfsdf"></Typography>
      </FormProvider>
      <ToolTip
        message="messageeeeeeeee"
        titleNode={<span>asdasdasdasd</span>}
      />
    </ProcessLoading>
  );
}
