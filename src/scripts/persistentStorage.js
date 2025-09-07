async function setupPersistentStorage() {
  if (!('storage' in navigator && 'persist' in navigator.storage)) {
    console.warn('El navegador no soporta almacenamiento persistente estándar');
    return;
  }

  const isPersisted = await navigator.storage.persisted();
  if (isPersisted) {
    console.log('El almacenamiento ya es persistente ✅');
    return;
  }

  const granted = await navigator.storage.persist();
  console.log(granted ? 'Se concedió almacenamiento persistente ✅' : 'No se concedió almacenamiento persistente ❌');
}

setupPersistentStorage();
