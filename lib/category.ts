import { query } from '@/utils/db';

// Tüm kategorileri getir
export const getCategories = async () => {
    const result = await query('SELECT * FROM categories ORDER BY sort_order');
    return result.rows;
};

// SLUG ile tek bir kategoriyi getir
export const getCategoryBySlug = async (slug: string) => {
    const result = await query('SELECT * FROM categories WHERE slug = $1', [slug]);
    return result.rows[0];
};

// Yeni kategori ekle
export const addCategory = async (
    slug: string,
    name: string,
    title: string,
    description: string,
    content: string,
    canonical: string,
    keyword: string,
    parentId: number | null,
    sortOrder: number,
    image: string
) => {
    const result = await query(
        `INSERT INTO categories (slug, name, title, description, content, canonical, keyword, parent_id, sort_order, image, created_at, updated_at) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, NOW(), NOW()) RETURNING *`,
        [slug, name, title, description, content, canonical, keyword, parentId, sortOrder, image]
    );
    return result.rows[0];
};

// Kategori güncelle
export const updateCategory = async (
    id: number,
    slug: string,
    name: string,
    title: string,
    description: string,
    content: string,
    canonical: string,
    keyword: string,
    parentId: number | null,
    sortOrder: number,
    image: string
) => {
    const result = await query(
        `UPDATE categories 
        SET slug = $2, name = $3, title = $4, description = $5, content = $6, canonical = $7, keyword = $8, parent_id = $9, sort_order = $10, image = $11, updated_at = NOW() 
        WHERE id = $1 RETURNING *`,
        [id, slug, name, title, description, content, canonical, keyword, parentId, sortOrder, image]
    );
    return result.rows[0];
};

// Kategori sil
export const deleteCategory = async (id: number) => {
    const result = await query('DELETE FROM categories WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
};
