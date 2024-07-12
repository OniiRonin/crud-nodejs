let items = []; // Array en memoria para almacenar items

// Crear (Create)
exports.createItem = (req, res) => {
    const item = { id: items.length + 1, ...req.body };
    items.push(item);
    res.status(201).send(item);
};

// Leer todos (Read All)
exports.getAllItems = (req, res) => {
    res.send(items);
};

// Leer uno por ID (Read One)
exports.getItemById = (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send("Item no encontrado");
    res.send(item);
};

// Actualizar (Update)
exports.updateItem = (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send("Item no encontrado");

    Object.assign(item, req.body); // Actualizar el item con los datos del cuerpo de la solicitud
    res.send(item);
};

// Eliminar (Delete)
exports.deleteItem = (req, res) => {
    const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
    if (itemIndex === -1) return res.status(404).send("Item no encontrado");

    items.splice(itemIndex, 1); // Eliminar el item del array
    res.status(204).send(); // No Content
};