export interface GoogleAuthTokenObj {
	access_token: string;
	expires_at: number;
	expires_in: number;
	first_issued_at: number;
	id_token: string;
	idpId: string;
	login_hint: string;
	token_type: string;
}

export interface GoogleAuthProfileObj {
	email: string;
	familyName: string;
	givenName: string;
	googleId: string;
	imageUrl: string;
	name: string;
}

export interface GoogleAuthObj {
	tokenObj: GoogleAuthTokenObj;
	profileObj: GoogleAuthProfileObj;
}
