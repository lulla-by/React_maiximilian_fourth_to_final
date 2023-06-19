import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    
    const client = await MongoClient.connect(process.env.REACT_MONGODB);
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    
    const result = await meetupsCollection.insertOne(data); // 데이터베이스에 문서 추가
    
    console.log(result);
    
    client.close(); // 데이터베이스 연결 차단
    res.status(201).json({ message: 'Meetup inserted!' }); // 응답 반환
  }
}

export default handler;