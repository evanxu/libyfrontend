<div class="promotion-add">
  <div class="box-title promotion-add-box">
    <h3>
      <i class="iconfont">&#xe604;</i>
      <span>新建促销活动</span>
    </h3>
  </div>
  <div class="promotion-add-form">
    <form class="form" action="javascript:;">
      <div class="form-item">
        <span class="form-title">活动名称：</span>
        <input type="text" class="input" placeholder="请输入活动名称" name="">
        <p class="error">名称不能为空且真实有效</p>
      </div>
      <div class="form-item promotion-add-setrule">
        <span class="form-title">选择门店：</span>
        <div class="form-select">
          <input type="text" class="input input-select" name="" placeholder="请选择门店">
        </div>
      </div>
      <div class="form-item">
        <span class="form-title">活动时间：</span>
          <div class="form-datepicker promotion-add-date">
            <input type="text" class="input" placeholder="请选择起始时间" name="">
          </div>
          <p class="promotion-add-fromto m-hide">至</p>
          <div class="form-datepicker promotion-add-date">
            <input type="text" class="input" placeholder="请选择结束时间" name="">
          </div>
      </div>
      <div class="form-item clearfix">
        <span class="form-title">活动图片：</span>
        <div class=" promotion-add-pic">
          <a href="javascript:;">上传活动图片</a>
          <input type="file">
        </div>
        <div class=" promotion-add-pic">
          <a href="javascript:;">选择产品图片</a>
          <input type="file">
        </div>
      </div>
      <div class="promotion-add-btn promotion-add-dashedline">
      </div>
      <div class="form-item promotion-add-setrule">
        <span class="form-title">设置规则：</span>
        <div class="form-select">
          <input type="text" class="input input-select" name="" placeholder="选择门店类型">
        </div>
      </div>
      <div class="form-item promotion-add-rules">
        <span class="form-title">活动规则1：</span>
        <div class="promotion-add-rules-box">
          <span>买</span>
          <input type="text" class="input" placeholder="" name="">
        </div>
        <div class="promotion-add-rules-box">
          <span>送</span>
          <input type="text" class="input" placeholder="" name="">
        </div>
      </div>
      <div class="form-item promotion-add-rules">
        <div class="promotion-add-rules-box">
          <span>买</span>
          <input type="text" class="input" placeholder="" name="">
        </div>
        <div class="promotion-add-rules-box">
          <span>送</span>
          <input type="text" class="input" placeholder="" name="">
        </div>
      </div>
      <div class="form-item promotion-add-addrule">
        <a href="javascript:;">+ 新增活动规则</a>
      </div>
      <div class="form-item promotion-add-require">
        <span class="form-title">活动要求：</span>
        <textarea class="textarea" placeholder="" name=""></textarea>
      </div>
      <div class="promotion-add-btn">
        <input type="button" value="确定" name="" class="button button-blue button-radius button-medium mr30" onclick="location.href = '/views/promotion-my-activity.html'">
        <a class="button button-grey button-radius button-medium" href="javascript:history.go(-1)">取消</a>
      </div>
    </form>
  </div>
</div>
