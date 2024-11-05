import { query } from '@/utils/db';

// Tüm markaları getir
export const getBrands = async () => {
    const result = await query('SELECT * FROM brands ORDER BY sort_order');
    return result.rows;
};

// Slug ile tek bir markayı getir
export const getBrandBySlug = async (slug: string) => {
    const result = await query('SELECT * FROM brands WHERE slug = $1', [slug]);
    return result.rows[0];
};

// Yeni marka ekle
export const addBrand = async (
    slug: string,
    name: string,
    title: string,
    description: string,
    content: string,
    canonical: string,
    keyword: string,
    sortOrder: number,
    image: string
) => {
    const result = await query(
        `INSERT INTO brands (slug, name, title, description, content, canonical, keyword, sort_order, image, created_at, updated_at) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, NOW(), NOW()) RETURNING *`,
        [slug, name, title, description, content, canonical, keyword, sortOrder, image]
    );
    return result.rows[0];
};

// Marka güncelle
export const updateBrand = async (
    id: number,
    slug: string,
    name: string,
    title: string,
    description: string,
    content: string,
    canonical: string,
    keyword: string,
    sortOrder: number,
    image: string
) => {
    const result = await query(
        `UPDATE brands 
        SET slug = $2, name = $3, title = $4, description = $5, content = $6, canonical = $7, keyword = $8, sort_order = $9, image = $10, updated_at = NOW() 
        WHERE id = $1 RETURNING *`,
        [id, slug, name, title, description, content, canonical, keyword, sortOrder, image]
    );
    return result.rows[0];
};

// Marka sil
export const deleteBrand = async (id: number) => {
    const result = await query('DELETE FROM brands WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
};
