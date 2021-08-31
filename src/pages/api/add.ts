import { NextApiHandler } from "next";
import { Client } from "@notionhq/client";

export const notion = new Client({
	auth: "secret_rBtM34u7Unw5sUtrgum98NgNC9mOKU8Sr88SYXvxorf",
});

const databaseId = "2bdd098edea8480daf49410c3f1e994b";

const handler: NextApiHandler = async (req, res) => {
	if (req.method === "POST") {
		try {
			const database = await notion.databases.retrieve({
				database_id: databaseId,
			});

			const properties: Record<string, any> = {
				Name: {
					title: [
						{
							text: {
								content: req.body.name,
							},
							type: "text",
						},
					],
					type: "title",
				},
				Email: {
					email: req.body.email,
					type: "email",
				},
				"Created At": {
					date: {
						start: new Date().toISOString(),
					},
					type: "date",
				},
			};

			if (req.body.phone) {
				properties["Phone"] = {
					phone_number: req.body?.phone ?? "-",
					type: "phone_number",
				};
			}

			if (req.body.instagram) {
				properties["Instagram"] = {
					select: {
						name: req.body.instagram,
					},
					type: "select",
				};
			}

			if (req.body.facebook) {
				properties["Facebook"] = {
					select: {
						name: req.body.facebook,
					},
					type: "select",
				};
			}

			if (req.body.notes) {
				properties["Notes"] = {
					type: "rich_text",
					rich_text: [
						{
							text: {
								content: req.body.notes,
							},
							type: "text",
						},
					],
				};
			}

			const creationResult = await notion.pages.create({
				parent: {
					database_id: database.id,
				},
				properties,
			});
			res.status(200).json(creationResult);
		} catch (error) {
			res.status(404).json({ error });
		}

		return;
	}
	res.status(401);
};

export default handler;
