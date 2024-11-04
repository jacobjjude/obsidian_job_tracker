<%*
let company = await tp.system.prompt("Company Name")
let position = await tp.system.prompt("Position Title")
let status = await tp.system.suggester(
  ["Applied", "Rejected", "Ghosted :(", "Offer Sent", "Offer Accepted"],
  ["Applied", "Rejected", "Ghosted :(", "Offer Sent", "Offer Accepted"]
)
let date_applied = tp.date.now("MM-DD-YYYY")

let newFileName = company + " - " + position
let newFilePath = "job_apps/" + newFileName
await tp.file.move(newFilePath)

tR += `---
company: ${company}
position: ${position}
status: ${status}
date applied: ${date_applied}
---`
%>

## Company
- (Company:: <% company %>)

## Position
- (Position:: <% position %> )

## Status
- (Status:: <% status %>) 

## Notes
- 
