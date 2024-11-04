async function updateStatus() {
    let notePath = tp.file.path(true);
    let newStatus = await tp.system.suggester(
        ["Applied", "Rejected", "Ghosted :(", "Offer Sent", "Offer Accepted"],
        ["Applied", "Rejected", "Ghosted :(", "Offer Sent", "Offer Accepted"]
    );
    let file = await app.vault.getAbstractFileByPath(notePath);
    if (!file) {
        new Notice("File not found");
        return;
    }
    let content = await app.vault.read(file);
    content = content.replace(/status: .*/i, `status: ${newStatus}`);
    await app.vault.modify(file, content);
    new Notice(`Status updated to "${newStatus}"`);
}

module.exports = updateStatus;