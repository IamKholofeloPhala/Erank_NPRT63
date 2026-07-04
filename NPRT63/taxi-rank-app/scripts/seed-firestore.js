#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const admin = require('firebase-admin');

const keyArg = process.argv[2] || process.env.SERVICE_ACCOUNT_KEY_PATH;
if (!keyArg) {
  console.error('Usage: node scripts/seed-firestore.js <path-to-serviceAccountKey.json>');
  process.exit(1);
}

const keyPath = path.isAbsolute(keyArg) ? keyArg : path.join(process.cwd(), keyArg);
if (!fs.existsSync(keyPath)) {
  console.error('Service account file not found:', keyPath);
  process.exit(1);
}

const serviceAccount = JSON.parse(fs.readFileSync(keyPath, 'utf8'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId: serviceAccount.project_id,
});

const db = admin.firestore();

async function seedAdmins() {
  const admins = [
    { uid: 'siya', email: 'siya@taxirank.co.za', fullName: 'Siya', role: 'admin' },
    { uid: 'bron', email: 'bron@taxirank.co.za', fullName: 'Bron', role: 'admin' },
    { uid: 'oara', email: 'oara@taxirank.co.za', fullName: 'Oara', role: 'admin' },
    { uid: 'ona', email: 'ona@taxirank.co.za', fullName: 'Ona', role: 'admin' },
    { uid: 'louisa', email: 'louisa@taxirank.co.za', fullName: 'Louisa', role: 'admin' }
  ];

  for (const a of admins) {
    const docRef = db.collection('admins').doc(a.uid);
    await docRef.set({
      uid: a.uid,
      email: a.email,
      fullName: a.fullName,
      role: a.role,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });
    console.log('Seeded admin', a.email);
  }
}

async function seedRanks() {
  const ranks = [
    { rankName: 'Bree Street Taxi Rank', city: 'Johannesburg', province: 'Gauteng', operatingHours: { open: '06:00', close: '22:00' } },
    { rankName: 'KwaMashu Taxi Rank', city: 'Durban', province: 'KwaZulu-Natal', operatingHours: { open: '06:00', close: '22:00' } },
    { rankName: 'Bellville Taxi Rank', city: 'Cape Town', province: 'Western Cape', operatingHours: { open: '06:00', close: '22:00' } },
    { rankName: 'Bloemfontein Taxi Rank', city: 'Bloemfontein', province: 'Free State', operatingHours: { open: '06:00', close: '22:00' } }
  ];

  for (const r of ranks) {
    const docRef = db.collection('ranks').doc();
    await docRef.set({
      rankId: docRef.id,
      rankName: r.rankName,
      city: r.city,
      province: r.province,
      operatingHours: r.operatingHours,
      isActive: true,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });
    console.log('Seeded rank', r.rankName);
  }
}

async function seedMarshals() {
  const marshals = [
    { fullName: 'Sizwe Ngcobo', cellNumber: '0829876543', rankName: 'Bree Street Taxi Rank' },
    { fullName: 'Lerato Mokoena', cellNumber: '0834567890', rankName: 'KwaMashu Taxi Rank' }
  ];

  for (const m of marshals) {
    const docRef = db.collection('marshals').doc();
    await docRef.set({
      marshalId: docRef.id,
      fullName: m.fullName,
      cellNumber: m.cellNumber,
      rankName: m.rankName,
      isActive: true,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });
    console.log('Seeded marshal', m.fullName);
  }
}

async function seedOwnersAndTaxis() {
  const owners = [
    { fullName: 'Thabo Mokoena', cellNumber: '0821234567', rankName: 'Bree Street Taxi Rank' },
    { fullName: 'Nomsa Zwane', cellNumber: '0837654321', rankName: 'KwaMashu Taxi Rank' },
    { fullName: 'Sipho Dlamini', cellNumber: '0719876543', rankName: 'Bellville Taxi Rank' },
    { fullName: 'Zanele Nkosi', cellNumber: '0723456789', rankName: 'Bloemfontein Taxi Rank' },
    { fullName: 'Bheki Khumalo', cellNumber: '0736547890', rankName: 'Bree Street Taxi Rank' }
  ];

  for (const o of owners) {
    const ownerDoc = db.collection('owners').doc();
    await ownerDoc.set({
      ownerId: ownerDoc.id,
      fullName: o.fullName,
      cellNumber: o.cellNumber,
      rankName: o.rankName,
      totalRides: 0,
      totalRevenue: 0,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });
    console.log('Seeded owner', o.fullName);

    // create two sample taxis per owner for demo
    for (let i = 1; i <= 2; i++) {
      const taxiDoc = db.collection('taxis').doc();
      const reg = `${o.fullName.split(' ')[0].slice(0,3).toUpperCase()}-0${i}${Math.floor(Math.random()*900)}${Math.floor(Math.random()*9)}`;
      await taxiDoc.set({
        taxiId: taxiDoc.id,
        registrationNumber: reg,
        ownerId: ownerDoc.id,
        ownerName: o.fullName,
        driverName: '',
        driverCell: '',
        capacity: 12,
        rankName: o.rankName,
        rankId: null,
        fare: 15,
        isAvailable: true,
        totalRides: 0,
        totalEarnings: 0,
        createdAt: admin.firestore.FieldValue.serverTimestamp()
      });
      console.log('  Seeded taxi', reg);
    }
  }
}

async function run() {
  try {
    console.log('Starting Firestore seed...');
    await seedAdmins();
    await seedRanks();
    await seedMarshals();
    await seedOwnersAndTaxis();
    console.log('Seeding complete.');
    process.exit(0);
  } catch (err) {
    console.error('Seeding failed:', err);
    process.exit(1);
  }
}

run();
