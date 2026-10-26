# Project 1 - Clinical Charting Module (eNCPT / ADIME)

Provider interface that generates standardized nutrition care process notes.

## Run it
```bash
npm install
npm run dev      # http://localhost:3000
```

## Step-by-step (what each part does)
1. **Terminology** - `data/ncpt-sample.json` holds the term lists (assessment domains, diagnoses, interventions, monitoring). Swap in your licensed/course eNCPT terms and verify codes.
2. **Note generator** - `lib/ncpt.js` -> `formatNote()` converts form data into an ADIME note with a PES statement.
3. **Form** - `components/ChartForm.js` (dropdowns/checkboxes force standardized terms; free text only for etiology/signs/details).
4. **API** - `app/api/notes/route.js` validates, formats, saves to `data/notes.json`.
5. **Pages** - `/` list notes, `/chart` new note, `/notes/[id]` view/print.
6. **Test** - create a note, confirm the PES sentence reads correctly, refresh and confirm it persists.
7. **Extend (optional)** - add edit/delete, PDF export, per-note-type templates (initial vs follow-up).

## JSON schemas + Postman (Lab 3 requirements)
- `schemas/` - one JSON Schema per NCP step (`assessment`, `diagnosis` (PES), `intervention`, `monitoring`) plus `note.schema.json` that combines them. Enums hold the eNCPT codes: if you change `data/ncpt-sample.json`, update the enums to match.
- `lib/validate.js` - validates every note with Ajv before saving; invalid notes get HTTP 400 with the error list.
- `postman/encpt-charting.postman_collection.json` - import into Postman (File > Import) with the dev server running. Includes 1 valid request (expect 201) and 2 invalid ones (expect 400).
