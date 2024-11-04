# Job Status

```dataviewjs
let jobApps = dv.pages('"job_apps"').groupBy(app => app.status); 
for (let group of jobApps) { 
    dv.header(3, group.key); 
    dv.table(
        ["Company", "Position", "Date Applied", "Notes"], 
        group.rows.map(app => [ 
            app.Company, 
            app.Position, 
            app["date applied"], 
            dv.fileLink(app.file.path, false, "Notes") 
        ]) 
    ); 
}
```






