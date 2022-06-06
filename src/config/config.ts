// Puerto
// ========================================
process.env.PORT = (process.env.PORT || 3000).toString();

// ================================================================================
// Titulo: Entorno
// ================================================================================
process.env.NODE_ENV = process.env.NODE_ENV ||'dev'

// ================================================================================
// Titulo: Base de datos
// ================================================================================
const urlDB: string = (process.env.NODE_ENV === 'dev') ? 'mongodb://localhost:27017/hospitalDB' : (process.env.MONGO_URI||'');
process.env.URL_DB = urlDB;

// ========================================
// Vencimiento del token
// ========================================

process.env.CADUDAD_TOKEN = (14400).toString();


// ================================================================================
// Titulo: SEED de Autenticacion
// ================================================================================
process.env.SEED  = process.env.SEED  || 'este-es-el-seed-desarrollo';

// ================================================================================
// Titulo: Google SignIn
// ================================================================================
process.env.GOOGLE_ID = process.env.GOOGLE_ID || '99182205801-t4ha3l56q6n6ma39dr60hr90tt3hjnvn.apps.googleusercontent.com';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
process.env.apiKey = 'AIzaSyA7AEQaqCKQITpST1DKZUkTeOzM5sC8mMg';

process.env.firebaseURL = 'https://api-rest-whatsapp-default-rtdb.firebaseio.com';