# Schema Principal

## users
id, email, password_hash, name, account_type, status, email_verified_at, created_at, updated_at

## writer_profiles
id, user_id, status, pen_name, bio, photo_path, editorial_data_json, activated_at, created_at, updated_at

## roles
id, name

## permissions
id, key

## role_permissions
role_id, permission_id

## user_roles
user_id, role_id

## books
id, writer_id, status, visibility, title, subtitle, description, language, isbn, slug, published_at

## book_versions
id, book_id, version, manuscript_path, cover_path, page_count, validation_status, created_at

## categories
id, name, slug

## book_categories
book_id, category_id

## products
id, book_id, format, paper, printing, binding, price, production_cost, active

## carts
id, user_id

## cart_items
id, cart_id, product_id, quantity

## orders
id, user_id, status, currency, subtotal, shipping, discount, total, stripe_payment_intent_id

## order_items
id, order_id, product_id, quantity, unit_price

## payments
id, order_id, provider, provider_reference, status, amount, currency

## royalties
id, writer_id, order_id, order_item_id, gross, costs, platform_fee, writer_amount, status

## ledger_entries
id, writer_id, type, amount, reference_type, reference_id, created_at

## print_jobs
id, order_id, provider_id, status, external_reference, payload_json

## shipments
id, order_id, carrier, tracking_code, status

## audit_logs
id, actor_user_id, action, resource_type, resource_id, before_json, after_json, ip, created_at
