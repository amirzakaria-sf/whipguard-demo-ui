# whipguard-demo-ui

Seeded-bug fixture app for WhipGuard demos.

Deleting an item from the list removes the wrong one whenever more than one item
exists (off-by-one in `app.js`'s delete handler). `tests/delete.spec.ts` catches it.
