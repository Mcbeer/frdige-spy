export interface User {
	id?: number;
	google_id: string;
	name?: string;
	avatar_url?: string;
	created_at?: string;
	updated_at?: string;
	accounts?: Account[];
}

export interface Account {
	id: number;
	name: string;
	invite_code: string;
	created_at: string;
	updated_at: string;
}

export interface UserAccountRelation {
	id: number;
	role: string;
	account_id: number;
	user_id: number;
}

export interface UserWithTokens {
	user: User;
	tokens: GeneratedTokens;
}

export interface Token {
	[key: string]: unknown;
}

export interface GeneratedTokens {
	access_token: Token;
	refresh_token: Token;
}
