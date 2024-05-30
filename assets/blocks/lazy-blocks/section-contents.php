<?php
global $post;
// Get the children of the current page
$children = get_pages(array(
    'parent' => $post->ID,
    'sort_column' => 'menu_order',
    'sort_order' => 'ASC'
));
?>
<nav class="section-contents">
<?php if (!empty($children)): ?>
    <ul class="parent-page">
        <?php foreach ($children as $child): ?>
            <li>
                <a href="<?php echo get_permalink($child->ID); ?>" title="<?php echo $child->post_title; ?>">
                    <?php echo $child->post_title; ?>
                </a>
                <?php
                // Fetch the excerpt for the child page
                $child_post = get_post($child->ID);
                $excerpt = $child_post->post_excerpt;
                if ($excerpt): ?>
                    <p class="entry-subtitle"><?php echo $excerpt; ?></p>
                <?php endif; ?>

                <?php
                // Get the first level of subchildren for the current child page
                $subchildren = get_pages(array(
                    'parent' => $child->ID,
                    'sort_column' => 'menu_order',
                    'sort_order' => 'ASC'
                ));
                ?>

            </li>
        <?php endforeach; ?>
    </ul>
<?php endif; ?>
</nav>