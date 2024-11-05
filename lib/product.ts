import { query } from '@/utils/db';

// Tüm ürünleri getir
export const getProducts = async () => {
    const result = await query('SELECT * FROM products WHERE status = $1 ORDER BY sort_order', ['active']);
    return result.rows;
};

// Slug ile tek bir ürünü getir
export const getProductBySlug = async (slug: string) => {
    const result = await query(`
        SELECT products.*, categories.slug AS category_slug, brands.slug AS brand_slug, brands.name AS brand_name, categories.name AS category_name
        FROM products
        JOIN categories ON products.category_id = categories.id
        JOIN brands ON products.brand_id = brands.id
        WHERE products.slug = $1 AND products.status = $2
    `, [slug, 'active']);

    return result.rows[0];
};

// Belirli bir kategoriye göre ürünleri getir
export const getProductsByCategory = async (categoryId: number) => {
    const result = await query(`
        SELECT products.*, brands.name AS brand_name, brands.slug AS brand_slug
        FROM products
        JOIN brands ON products.brand_id = brands.id
        WHERE products.category_id = $1 AND products.status = $2
        ORDER BY products.sort_order
    `, [categoryId, 'active']);

    return result.rows;
};

// Belirli bir markaya göre ürünleri getir
export const getProductsByBrand = async (brandId: number) => {
    const result = await query(`
        SELECT products.*, brands.name AS brand_name, brands.slug AS brand_slug, categories.slug AS category_slug
        FROM products
        JOIN brands ON products.brand_id = brands.id
        JOIN categories ON products.category_id = categories.id
        WHERE products.brand_id = $1 AND products.status = $2
        ORDER BY products.sort_order
    `, [brandId, 'active']);

    return result.rows;
};


// Yeni ürün ekle
export const addProduct = async (
    slug: string,
    name: string,
    description: string,
    content: string,
    image: string,
    categoryId: number,
    brandId: number,
    title: string,
    canonical: string,
    keyword: string,
    status: string,                         // Ürün durumu (active, inactive)
    sortOrder: number
) => {
    const result = await query(
        `INSERT INTO products 
        (slug, name, description, content, image, category_id, brand_id, title, canonical, keyword, status, sort_order, created_at, updated_at) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, NOW(), NOW()) RETURNING *`,
        [slug, name, description, content, image, categoryId, brandId, title, canonical, keyword, status, sortOrder]
    );
    return result.rows[0];
};

// Ürün güncelle
export const updateProduct = async (
    id: number,
    slug: string,
    name: string,
    description: string,
    content: string,
    image: string,
    categoryId: number,
    brandId: number,
    title: string,
    canonical: string,
    keyword: string,
    status: string,                         // Ürün durumu (active, inactive)
    sortOrder: number
) => {
    const result = await query(
        `UPDATE products 
        SET slug = $2, name = $3, description = $4, content = $5, image = $6, category_id = $7, brand_id = $8, 
        title = $9, canonical = $10, keyword = $11, status = $12, sort_order = $13, updated_at = NOW() 
        WHERE id = $1 RETURNING *`,
        [id, slug, name, description, content, image, categoryId, brandId, title, canonical, keyword, status, sortOrder]
    );
    return result.rows[0];
};

// Ürün sil
export const deleteProduct = async (id: number) => {
    const result = await query('DELETE FROM products WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
};
