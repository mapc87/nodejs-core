import app from "@server/server"
import {PORT} from "@configuration/config.configuration"

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});