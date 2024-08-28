import { useEffect, useRef, useState, useMemo } from "react";
import {
  Box,
  Button,
  Grow,
  IconButton,
  MenuItem,
  Paper,
  Popper,
  Select,
  Stack,
  TextField,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { DeleteOutlined, AddOutlined, InfoOutlined } from "@mui/icons-material";
import { GridCellKind, GridColumnIcon } from "@glideapps/glide-data-grid";
import AppRunForm from "./AppRunForm";
import ProcessorRunForm from "./ProcessorRunForm"; // Added this import
import "@glideapps/glide-data-grid/dist/index.css";
import Tooltip from "@mui/material/Tooltip";

const numberToLetters = (num) => {
  let letters = "";
  while (num >= 0) {
    letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[num % 26] + letters;
    num = Math.floor(num / 26) - 1;
  }
  return letters;
};

export const sheetColumnTypes = {
  text: {
    value: "text",
    label: "Text",
    icon: GridColumnIcon.HeaderString,
    kind: GridCellKind.Text,
    getCellDataFromValue: (value) => value?.data || "",
    getCellData: (cell) => cell?.data || "",
    getCellDisplayData: (cell) => cell?.data || "",
  },
  number: {
    value: "number",
    label: "Number",
    icon: GridColumnIcon.HeaderNumber,
    kind: GridCellKind.Number,
    getCellDataFromValue: (value) => value?.data || "",
    getCellData: (cell) => cell?.data || 0,
    getCellDisplayData: (cell) => cell?.data?.toLocaleString() || "",
  },
  uri: {
    value: "uri",
    label: "URI",
    icon: GridColumnIcon.HeaderUri,
    kind: GridCellKind.Uri,
    getCellDataFromValue: (value) => value?.data || "",
    getCellData: (cell) => cell?.data || "",
    getCellDisplayData: (cell) => cell?.data || "",
  },
  app_run: {
    value: "app_run",
    label: "App Run",
    icon: "app_run",
    kind: GridCellKind.Text,
    getCellDataFromValue: (value) => {
      return {
        output: value?.data,
      };
    },
    getCellData: (cell) => cell?.data?.output || cell?.display_data || "",
    getCellDisplayData: (cell) =>
      cell?.data?.output || cell?.display_data || "",
  },
  processor_run: {
    value: "processor_run",
    label: "Processor Run",
    icon: "processor_run",
    kind: GridCellKind.Text,
    getCellDataFromValue: (value) => {
      return {
        output: value?.data,
      };
    },
    getCellData: (cell) => cell?.data?.output || cell?.display_data || "",
    getCellDisplayData: (cell) =>
      cell?.data?.output || cell?.display_data || "",
  },
};

export function SheetColumnMenu({
  anchorEl,
  column,
  columns,
  addColumn,
  updateColumn,
  deleteColumn,
  open,
  setOpen,
}) {
  const [columnName, setColumnName] = useState(column?.title || "");
  const [columnType, setColumnType] = useState(GridCellKind.Text);
  const columnRunData = useRef(column?.data || {});
  const [transformData, setTransformData] = useState(false);
  const [transformationTemplate, setTransformationTemplate] = useState("");
  const [fillRowsWithOutput, setFillRowsWithOutput] = useState(false);

  useEffect(() => {
    setColumnType(column?.type || GridCellKind.Text);
    setColumnName(column?.title || "");
    columnRunData.current = column?.data || {};
    setTransformData(!!column?.data?.transformation_template);
    setTransformationTemplate(column?.data?.transformation_template || "");
    setFillRowsWithOutput(!!column?.data?.fill_rows_with_output);
  }, [column]);

  const memoizedProcessorRunForm = useMemo(
    () => (
      <ProcessorRunForm
        setData={(data) => {
          columnRunData.current = {
            ...columnRunData.current,
            ...data,
          };
        }}
        providerSlug={columnRunData.current?.provider_slug}
        processorSlug={columnRunData.current?.processor_slug}
        processorInput={columnRunData.current?.input}
        processorConfig={columnRunData.current?.config}
        processorOutputTemplate={columnRunData.current?.output_template}
        columns={columns}
      />
    ),
    [columns],
  );

  const handleAddOrEditColumn = () => {
    const newColumn = {
      col: column ? column.col : numberToLetters(columns.length),
      title: columnName || "New Column",
      type: columnType,
      kind: sheetColumnTypes[columnType]?.kind,
      icon: sheetColumnTypes[columnType]?.icon,
      hasMenu: column?.hasMenu || true,
      width: column?.width || 300,
      data:
        (columnType === "app_run" || columnType === "processor_run") &&
        columnRunData.current
          ? {
              ...columnRunData.current,
              transformation_template: transformData
                ? transformationTemplate
                : undefined,
              fill_rows_with_output: fillRowsWithOutput,
              kind: columnType,
            }
          : {},
    };

    if (column) {
      updateColumn(newColumn);
    } else {
      addColumn(newColumn);
    }
    setOpen(false);
    setColumnName("");
    setColumnType(GridCellKind.Text);
  };

  const handleColumnDelete = () => {
    deleteColumn(column);
    setOpen(false);
    setColumnName("");
    setColumnType(GridCellKind.Text);
  };

  return (
    <Popper
      open={open}
      anchorEl={anchorEl}
      role={undefined}
      placement="bottom-start"
      transition
      sx={{
        width: "450px",
        maxHeight: "90vh",
        overflowY: "auto",
        padding: "0px 2px 8px 2px",
      }}
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === "bottom-start" ? "left top" : "left bottom",
          }}
        >
          <Paper>
            <Stack gap={2} sx={{ padding: 2 }}>
              <Stack
                direction="row"
                gap={2}
                sx={{ justifyContent: "flex-end" }}
              >
                {column && (
                  <IconButton
                    variant="outlined"
                    onClick={handleColumnDelete}
                    sx={{
                      color: "text.secondary",
                      minWidth: "30px",
                      padding: 0,
                    }}
                  >
                    <DeleteOutlined />
                  </IconButton>
                )}
              </Stack>
              <TextField
                label="Name"
                value={columnName}
                placeholder="Column Name"
                variant="outlined"
                onChange={(e) => setColumnName(e.target.value)}
              />
              <Select
                value={columnType}
                id="column-type-select"
                aria-label="Column Type"
                placeholder="Column Type"
                helperText="Select the type of data this column will contain"
                onChange={(e) => setColumnType(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              >
                {Object.keys(sheetColumnTypes).map((type) => (
                  <MenuItem key={type} value={type}>
                    {sheetColumnTypes[type].label}
                  </MenuItem>
                ))}
              </Select>
              {columnType === "app_run" && (
                <AppRunForm
                  setData={(data) => {
                    columnRunData.current = {
                      ...columnRunData.current,
                      ...data,
                    };
                  }}
                  appSlug={columnRunData.current?.app_slug}
                  appInput={columnRunData.current?.input}
                  columns={columns}
                />
              )}
              {columnType === "processor_run" && memoizedProcessorRunForm}
              {(columnType === "app_run" || columnType === "processor_run") && (
                <>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={transformData}
                        onChange={(e) => setTransformData(e.target.checked)}
                      />
                    }
                    label="Transform output data"
                  />
                  {transformData && (
                    <>
                      <TextField
                        label="Transformation Template"
                        value={transformationTemplate}
                        onChange={(e) =>
                          setTransformationTemplate(e.target.value)
                        }
                        multiline
                        rows={4}
                        placeholder="Enter LiquidJS template"
                      />
                      <Typography variant="caption" color="text.secondary">
                        Use LiquidJS syntax to transform the output. Example:
                        <code>{`{{ output | split: ' ' | first }}`}</code>. The
                        'output' variable contains the original result.
                      </Typography>
                    </>
                  )}
                  <Box sx={{ my: 2 }}>
                    {" "}
                    {/* Added spacing */}
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={fillRowsWithOutput}
                          onChange={(e) =>
                            setFillRowsWithOutput(e.target.checked)
                          }
                        />
                      }
                      label={
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <span>Fill rows with output</span>
                          <Tooltip title="When checked, this column will be run once without row data. The output will be used to populate rows below.">
                            <InfoOutlined fontSize="small" color="action" />
                          </Tooltip>
                        </Stack>
                      }
                    />
                  </Box>
                  {fillRowsWithOutput && (
                    <Typography variant="caption" color="text.secondary">
                      The output will be processed as follows:
                      <ul>
                        <li>If it's a list, each item will fill a row.</li>
                        <li>Otherwise, it will fill only the first row.</li>
                      </ul>
                      Transformation template will be applied if provided.
                    </Typography>
                  )}
                </>
              )}
              <Stack
                direction="row"
                spacing={2}
                sx={{ width: "100%", justifyContent: "center", mt: 2 }}
              >
                <Button variant="standard" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button variant="contained" onClick={handleAddOrEditColumn}>
                  {column ? "Update" : "Add"}
                </Button>
              </Stack>
            </Stack>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
}

export function SheetColumnMenuButton({ columns, addColumn }) {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <IconButton
        aria-label="add-column"
        ref={anchorRef}
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={() => setOpen(!open)}
      >
        <AddOutlined />
      </IconButton>
      <SheetColumnMenu
        columns={columns}
        addColumn={addColumn}
        open={open}
        setOpen={setOpen}
        anchorEl={anchorRef.current}
      />
    </Box>
  );
}