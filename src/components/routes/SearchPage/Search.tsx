import { Button, TextField } from "@mui/material";

export default function Search() {
  return (
    <div>
      <div className="bg-chakikaDarkGreen h-40 pt-10 flex flex-col justify-center items-center text-center text-3xl font-extrabold text-white">
        Search For Your Need
        <br />
        <div>
          <div className="flex items-center w-fit p-[0.4rem] bg-chakikaLightGreen rounded-full my-4">
            <TextField
              variant="standard"
              size="small"
              placeholder="Search Here ..."
              sx={{ padding: "0 2rem" }}
              InputProps={{ disableUnderline: true }}
              inputProps={{
                style: {
                  textAlign: "center",
                  padding: 0,
                  fontSize: "0.7rem",
                },
              }}
            />
            <Button
              variant="contained"
              size="small"
              sx={{
                borderRadius: "28px",
                boxShadow: 0,
                width: "6.5rem",
                fontSize: "0.7rem",
                textTransform: "none",
              }}
            >
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
