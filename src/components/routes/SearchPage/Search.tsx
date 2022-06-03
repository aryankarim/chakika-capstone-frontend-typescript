import { Button, InputAdornment, TextField } from "@mui/material";

export default function Search() {
  return (
    <div>
      <div className="bg-chakikaDarkGreen h-24 flex justify-center items-center text-center text-3xl font-extrabold text-chakikaGrey">
        Search For Your Need
      </div>
      <div>
        <div className="flex items-center w-fit p-2 bg-chakikaLightGreen rounded-full">
          <TextField
            variant="standard"
            size="small"
            sx={{ padding: "0 0.5rem" }}
          />
          <Button
            variant="contained"
            sx={{
              borderRadius: "28px",
              boxShadow: 0,
            }}
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
