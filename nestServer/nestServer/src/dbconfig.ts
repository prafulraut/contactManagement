export const DBCONFIG = [
  'mongodb://localhost/student_management',
  'mongodb+srv://kaushalkumar:J5oEvYxAU0WXdsWO@cluster0.crjph.mongodb.net/DataManagement',
  'mongodb+srv://kaushalkumar:J5oEvYxAU0WXdsWO@cluster0.crjph.mongodb.net/ContactManagement',
  // 'mongodb+srv://praful:d2ouWyJZbK2tslKB@cluster0.zqugcfb.mongodb.net/contactList',
  // 'mongodb+srv://praful:UUDhbLJx9cndc1l1@cluster0.3jrulgd.mongodb.net/contactList'
  // 'mongodb+srv://praful:@cluster0.zqugcfb.mongodb.net/test'
  

];

export const MongoDB = {
  DbConnection: DBCONFIG[2],
};
// process.env.MONGODB_STORE_URI || 'mongodb+srv://kaushalkumar:J5oEvYxAU0WXdsWO@cluster0.crjph.mongodb.net/DataManagement',
