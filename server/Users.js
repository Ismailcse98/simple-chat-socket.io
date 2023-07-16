let users = [];

const addUser = (id,name,room)=>{
	name = name.trim().toLowerCase();
	room = room.trim().toLowerCase();
	let existingUser = users.find((user)=>user.name===name && user.room===room);
	if (existingUser) {
		return {error: "User already exists"}
	}

	const user = {id,name,room}
	users.push(user);
	return user;
}

const removeUser=(id)=> {
	let index = users.findIndex(user=>user.id===id);
	if (index !== -1) {
		return users.splice(index,1)[0];
	};
}

const getUserById = (id)=>{
	let user = users.find(user=>user.id===id);
	return user;
}
const getRoomUser = (room)=>{
	let roomUser = users.filter((user)=>user.room===room);
	return roomUser;
}

module.exports={addUser,removeUser,getUserById,getRoomUser}