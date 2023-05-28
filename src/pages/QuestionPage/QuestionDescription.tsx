import { Button, Stack, Typography } from "@mui/material";
import Frame from "../../components/Frame";
import GreenButton from "../../components/GreenButton/GreenButton";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { ReactElement } from "react";
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import styles from "./QuestionDescription.module.css";

import defaultImg from "../../assets/ActivityCommitGraph.jpg";

interface Props {
  title: string;
  children?: ReactElement | ReactElement[];
  onSubmit: () => void;
}

export default function QuestionDescription({
  title,
  children,
  onSubmit,
}: Props) {
  const navigate = useNavigate();

  function alertBack() {
    const confirmBack = window.confirm(
      "Are you sure you want to leave the workspace? Your changes will not be saved."
    );

    if (confirmBack) {
      navigate(-1);
    }
  }

  return (
    <Frame className={styles.container}>
      <Stack direction="row" alignItems="center">
        {/* TODO: replace with ThemeButton */}
        <Button
          onClick={alertBack}
          sx={{
            background: "#7A4CC5",
            color: "white",
            marginRight: "10px",
          }}
        >
          <ArrowBack />
        </Button>

        {/* TODO: replace with ToggleButton */}
        <Button
          sx={{
            background: grey[700],
            color: grey[200],
            width: "-webkit-fill-available",

            fontWeight: "bold",
          }}
        >
          Discussion
        </Button>
      </Stack>

      <Stack
        className={styles["content-container"]}
        spacing={5}
        justifyContent="center" // Aligns children vertically in the center
        sx={{ flex: 1 }} // Expands the container to take available space
      >
        <Typography
          variant="h2"
          sx={{
            color: "#7A4CC5",
          }}
        >
          {title}
        </Typography>
        {children}
        <Typography variant="h3">Desired Graph</Typography>
        <img src={defaultImg} />

        <Typography variant="body2">
          {" "}
          Feel free to use hints located on the right side of the screen if you
          require further guidance
        </Typography>
      </Stack>

      <GreenButton className={styles["submit-button"]} onClick={onSubmit}>
        Submit
      </GreenButton>
    </Frame>
  );
}
